"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListTodo from "../components/ListTodo";
import { ITask } from "./interfaces";

export default function Home() {
    // useState<TipoDosDados> <== Tipagem

    // primeiro state para pegar os dados inseridos no input
    const [task, setTask] = useState<string>("");

    // segundo state para popular a lista de task
    const [todoList, setTodoList] = useState<ITask[]>([]);

    function handleAddTask(event: any): void {
        event.preventDefault();

        const idRandom = uuidv4();
        const newTask = {
            id: idRandom,
            taskName: task,
        };

        setTodoList([...todoList, newTask]);
        setTask("");
    }

    function handleDeleteTask(deleteTaskById: string): void {
        setTodoList(
            todoList.filter((taskName) => taskName.id !== deleteTaskById)
        );
    }

    return (
        <div className="container max-w-lg flex flex-col items-center mx-auto mt-8">
            <h1 className="font-bold text-5xl text-center">
                Todo App - Nextjs
            </h1>
            <form className="w-full" onSubmit={handleAddTask}>
                <div className="flex flex-col w-full py-6 px-8">
                    <input
                        className="text-base font-semibold outline-none border-2 border-red-400 rounded-lg w-full py-3 px-4"
                        type="text"
                        placeholder="Insira a tarefa"
                        required
                        value={task}
                        onChange={(event) => setTask(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="px-4 py-3 bg-red-400 mt-2 border-b-4 rounded-lg border-red-700 w-full font-bold text-white active:scale-95 transition-colors active:shadow-xl"
                    >
                        Adicionar
                    </button>
                </div>
            </form>
            <div className="flex flex-col w-full py-6 px-8">
                {todoList.map((task) => (
                    <ListTodo
                        key={task.id}
                        task={task}
                        deleteTask={handleDeleteTask}
                    />
                ))}
            </div>
        </div>
    );
}
