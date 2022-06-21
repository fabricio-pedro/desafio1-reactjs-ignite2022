import { Task } from "./model/Task";
import {Trash} from 'phosphor-react';
import styles from  './TaskItem.module.css';
import { ChangeEvent, FormEvent, FormEventHandler, HtmlHTMLAttributes } from "react";
interface TaskItemProps{
   task:Task ,
   updateTask:(task:Task,status:boolean) =>void,
   removeTask:(id:string) => void;
}

export function TaskItem({task,updateTask,removeTask}:TaskItemProps){
   
   function onChangedStatusTask(event:ChangeEvent<HTMLInputElement>){
      const newStatus=event.target.checked;
      updateTask(task,newStatus);

   }
   function onClickRemoveTask(id:string){
      removeTask(id);

   }

   return <div className={styles.task}> 
            <input type="checkbox" id="task-select" checked={task.isCompleted}  onChange={onChangedStatusTask} /><span className={styles.checkMark}></span>
            <label htmlFor="task-select" className={`${task.isCompleted ? styles.taskChecked : ""}`}>{task.description} </label>
            <button type="button" className={styles.btnDel} onClick={()=>onClickRemoveTask(task.id)} >  <Trash size={24}/></button>
          </div> 

}