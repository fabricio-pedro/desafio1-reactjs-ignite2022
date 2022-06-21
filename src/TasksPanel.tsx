import styles from './TasksPanel.module.css'
import clipboard from  './assets/Clipboard.svg';
import { FormTask } from './FormTask';
import { useState } from 'react';
import {Task} from './model/Task';
import { v4 as uuidv4 } from "uuid"
import { TaskItem } from './TaskItem';
export function TasksPanel(){
   const [tasks,setTasks]=useState(new Array<Task>());
   const[total,setTotal]=useState(0);
   const [done,setDone]=useState(0);
   function createNewTask(desc:string){
     const task:Task= {id:uuidv4(),description:desc,isCompleted:false};
     setTasks([...tasks,task]);
     addTotal();
     


   }
   function updateStatusTask(task:Task,status:boolean){
    const taskUpdated=task;
    const taskList=tasks.map(t  =>{
          if(t.id===task.id){
            t.isCompleted=status;
          }
          calcTasksDone();
          return t;
    });
    
    setTasks(taskList);
   }
   function addTotal(){
     const newNumTask=tasks.length+1;
     setTotal(newNumTask);
   }
   function subTotal(){
     const newTotal=tasks.length-1;
     setTotal(newTotal);
   }
   
   function removeTask(id:string){
      const newList=tasks.filter(t => t.id!==id);
      const newListDone=newList.filter(t=>t.isCompleted);
      setDone(newListDone.length);
      setTasks(newList);
      subTotal();
      
      
     
   }

   function calcTasksDone(){
     const totalDone =tasks.filter(tasks=>tasks.isCompleted).length;
     setDone(totalDone);
   }
 
    return (
          <div>
               <FormTask createNewTask={createNewTask}/>
            <main className={styles.panel}>
                <div className={styles.totalizadors}>
                    <p>Tarefas criadas {total}</p>
                    <p>Concluidas {done}</p>
                </div>
                { total===0 && <span className={styles.division}></span>}
                <div className={styles.tasksList}>
                     { total===0?<div className={styles.messageContainer}>
                                    <img src={clipboard} alt="icone de lista vazia" />
                                    <p className={styles.message1}>Você ainda não tem tarefas cadastradas</p>
                                    <p>Crie tarefas e organize seus itens</p>
                                </div> 
                               :tasks.map(t =><TaskItem  removeTask={removeTask}  updateTask={updateStatusTask} key={t.id} task={t}/>) 
                    }
                </div>

            </main>
            </div>         
           )

}