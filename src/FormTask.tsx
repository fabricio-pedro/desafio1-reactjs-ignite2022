import styles from './FormTask.module.css';
import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
interface FormTaskProps{
  createNewTask:(desc:string)=>void;
}

export function FormTask({createNewTask}:FormTaskProps){
 const [descTask,setDescTask] =useState("");
 const isDescTaskEmpty=descTask.length===0;
  function onInputChanged(event:ChangeEvent<HTMLInputElement>){
    const desc=event.target.value;
     setDescTask(desc)
     event.target.setCustomValidity("");

  }
  function onSubmitForm(event:FormEvent){
    event.preventDefault();
    createNewTask(descTask)
    setDescTask("");
  }
  function onIvalidTask(event:InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity("Esse campo é obrigatório");
  }
  
  return <form  onSubmit={onSubmitForm} className={styles.formTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" value={descTask} onChange={onInputChanged} required  onInvalid={onIvalidTask}/> 
            <button type="submit" disabled={isDescTaskEmpty}>Criar <PlusCircle size={16}/></button>
          </form>
}