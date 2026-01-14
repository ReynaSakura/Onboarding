"use client";

import { ITask } from "@/types/tasks";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { deleteTodo, editTodo } from "@/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

    const queryClient = useQueryClient()

    const editTask = useMutation({
        mutationFn: editTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ 
                queryKey: ['todos'] 
            })
            setOpenModalEdit(false)
        },
    })

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        editTask.mutate({
            id: task.id,
            text: taskToEdit,
        })
    }
    
    const handleDeleteTask = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ 
                queryKey: ['todos'] 
            })
            setOpenModalDeleted(false)
        },
    })

    return (
    <tr key={task.id}>
    <td className="w-full">{task.text}</td>
    <td className="flex gap-5">
        <CiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={21} />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTodo}>
                <h3 className="font-bold text-lg" >Edit Task</h3>
                <div className="modal-action" >
                <Input 
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text" 
                placeholder="Type here" 
                className="w-full" />
                <Button type="submit">Submit</Button>
                </div>
            </form>
        </Modal>
        <FaRegTrashCan 
        onClick={() => setOpenModalDeleted(true)}
        cursor="pointer" className="text-red-500" size={18} />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
            <h3 className="text-lg" >Are you sure, you want to delete this task?</h3>
            <div className="modal-action">
                <Button
                onClick={() => handleDeleteTask.mutate(task.id)}
                >Yes</Button>
            </div>
        </Modal>
    </td>
    </tr>
    )
}

export default Task;