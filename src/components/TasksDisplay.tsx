import styles from "./TasksDisplay.module.css";

import checkIcon from "../assets/check.svg";
import { TrashIcon } from "./trashIcon";

export interface Tasks {
  id: number;
  task: string;
  status: boolean;
}

interface TasksDisplayProps {
  task: Tasks;
  handleDeleteTask: (id: number) => void;
  handleChangeStatusTask: (id: number) => void;
}

export function TasksDisplay({
  task,
  handleDeleteTask,
  handleChangeStatusTask,
}: TasksDisplayProps) {
  return (
    <div className={styles.contentTask}>
      <button
        onClick={() => handleChangeStatusTask(task.id)}
        className={task.status ? styles.statusTask : styles.statusTaskFalse}
      >
        {task.status && <img src={checkIcon} alt="ícone checkbox marcada" />}
      </button>
      <p className={task.status ? styles.textStyled : styles.textNormal}>
        {task.task}
      </p>
      <button
        onClick={() => handleDeleteTask(task.id)}
        className={styles.iconTrashbutton}
      >
        <TrashIcon />
      </button>
    </div>
  );
}
