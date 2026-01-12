'use client';

import { CiCirclePlus } from 'react-icons/ci';
import Modal from './Modal';
import { useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form"

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    type FormValues = {
        text: string
    }

    const { register, handleSubmit, reset } = useForm<FormValues>()

    const onSubmit = async (data: FormValues) => {
        await addTodo({
            id: uuidv4(),
            text: data.text
        })
        reset()
        setModalOpen(false)
        router.refresh()
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

export default AddTask;