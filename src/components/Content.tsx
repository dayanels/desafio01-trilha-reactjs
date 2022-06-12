import styles from "./Content.module.css";
import plusIcon from "../assets/plusIcon.svg";
import { TasksDisplay } from "./TasksDisplay";
import { Tasks } from "./TasksDisplay";

import clipboardImg from "../assets/clipboard.svg";
import { ChangeEvent, useEffect, useState } from "react";

export function Content() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [textInput, setTextInput] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTextInput(e.target.value);
  }

  function handleAddNewTask() {
    event?.preventDefault();
    const newTask = {
      id: Math.random() * 10,
      task: textInput,
      status: false,
    };

    setTasks([...tasks, newTask]);
    setTextInput("");
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((item) => item.id != id);

    setTasks([...newTasks]);
  }

  function handleChangeStatusTask(id: number) {
    const newTasks = tasks.map((itemTask) => {
      if (itemTask.id == id) {
        return {
          task: itemTask.task,
          status: !itemTask.status,
          id: itemTask.id,
        };
      } else {
        return itemTask;
      }
    });

    setTasks([...newTasks]);
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleAddNewTask}>
        <input
          onChange={handleInputChange}
          type="text"
          value={textInput}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" className={styles.buttonForm}>
          Criar
          <img src={plusIcon} alt="Icone de adicionar" />
        </button>
      </form>
      <div className={styles.tasks}>
        <div className={styles.taskHead}>
          <div className={styles.info}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.info}>
            <strong>Concluídas</strong>
            <span>{tasks.filter((item) => item.status == true).length}</span>
          </div>
        </div>
        <div className={styles.taskBody}>
          {tasks ? (
            tasks.map((task) => (
              <TasksDisplay
                key={task.id}
                handleChangeStatusTask={handleChangeStatusTask}
                handleDeleteTask={handleDeleteTask}
                task={task}
              />
            ))
          ) : (
            <div className={styles.empty}>
              <img src={clipboardImg} alt="Ícone de quadro em branco" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
