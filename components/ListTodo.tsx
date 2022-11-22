import { ITask } from "../app/interfaces";

interface TaskProps {
    task: ITask;
    deleteTask(handleDeleteTask: string): void;
}

const ListTodo = ({ task, deleteTask }: TaskProps) => {
    return (
        <>
            <ul>
                <li className="flex items-center justify-between border-2 border-red-400 rounded-lg p-4 mt-2">
                    <p className="font-semibold text-lg">{task.taskName}</p>
                    <span
                        className="hover:cursor-pointer"
                        onClick={() => deleteTask(task.id)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#000000"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="200"
                                y1="56"
                                x2="56"
                                y2="200"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></line>
                            <line
                                x1="200"
                                y1="200"
                                x2="56"
                                y2="56"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></line>
                        </svg>
                    </span>
                </li>
            </ul>
        </>
    );
};

export default ListTodo;
