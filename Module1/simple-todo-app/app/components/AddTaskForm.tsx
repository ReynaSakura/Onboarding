'use client';

import { CiCirclePlus } from 'react-icons/ci';
import Modal from './Modal';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form"
import { useTaskMutations } from '../hooks/useTaskMutations'

const AddTaskForm = () => {

    const { addTask } = useTaskMutations()
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    type FormValues = {
        text: string
    }

    const { register, handleSubmit, reset } = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        addTask.mutate({
            id: uuidv4(),
            text: data.text,
        })
        reset()
        setModalOpen(false)
    }
    return <div>
        <Button 
            onClick={() => setModalOpen(true)}
            className="w-full flex items-center gap-2"
        >
        Add new task
            <CiCirclePlus size={17}/>
        </Button>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg"> Add new task </h3>
            <div className="modal-action">
                <Input
                {...register("text")}
                placeholder="Type here"
                className="w-full"
                />
                <Button type="submit"> Submit </Button>
            </div>
            </form>
        </Modal>
    </div>
}

export default AddTaskForm;