import { useParams } from "react-router-dom";
import { useState, useEffect  } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'

function Task(props) {
    const {uuid, text, check} = props.task;
    const {todoList, setTodoList} = props;

    const handleDelete = function(e) {
        const element   = todoList.filter(e => e.uuid === uuid)[0]
        todoList.splice(todoList.indexOf(element), 1)
        setTodoList([...todoList])
    };

    return (
        <div className="d-flex bg-white mt-3 mb-3 rounded p-2 h-60 col-12 align-items-center"> 
            {
                check ? <input className="form-check-input me-3 ms-2 col-1" type="checkbox" checked/> :
                <input className="form-check-input me-3 ms-2 col-1" type="checkbox"/>
            }
            <p className="m-0 col-9"> {text} </p>
            <button onClick={handleDelete} type='button' className="btn btn-secondary col-2 btn-min-width"> Delete </button>
        </div>
    )
}

function Todo(props) {
    // pega o argumento passado à URL
    //const {id} = useParams()

    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList]   = useState([]);

    const { data } = props;

    const addTask = function(event) {
        var task = { uuid: uuidv4(), text: inputText, checked: false }

        setTodoList([...todoList, task]);
        console.log(task);
    }

    const handleChange = function(event) {
        setInputText(event.target.value);
    }

    return (
        <div className='h-100'>
            <div className='d-flex justify-content-center align-items-center h-100 no-resize'>
                <div className='card col-4 shadow-lg todo-min-width'>
                    <div className='card-header'>
                        <h1 className='text-center'> Todo List </h1>
                    </div>

                    <div className='card-body'>
                        <div className='d-grid gap-3'>
                            <div className='d-flex position-relative'>
                                <button type='button' className='btn btn-primary me-2 minHeight' onClick={addTask}> Add Task </button>
                                <div className="w-100">
                                    <input onChange={handleChange} type='text' className="form-control col-12" id="inputT"></input>
                                </div>
                            </div>
                            
                            <div className='container rounded color1'>
                                {
                                    todoList.map((element, index) => {
                                        return (
                                            <div key={index}>
                                                <Task task={element} todoList={todoList} setTodoList={setTodoList}> </Task>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;