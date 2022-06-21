
import './App.module.css';
import { FormTask } from './FormTask';
import './global.css';
import { Header } from './Header';
import { TasksPanel } from './TasksPanel';
function App() {
  

  return (
    <div className="App">
        <Header/>
        <TasksPanel/>
    </div>
  )
}

export default App
