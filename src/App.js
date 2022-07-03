import { useState } from 'react';
import './App.css';
import check from "./image/check.png"
import checked from "./image/checked.png"
import edit from "./image/edit.png"
import trashcan from "./image/trashcan.png"


function App() {
  const [input, setInput] = useState("")


  function submit() {
    if (input !== "") {
      const input_filed = document.querySelector('.input_box');
      const wait_div = document.querySelector('.wait_wrapper')
      const todo_item_div = document.createElement('div');
      todo_item_div.classList.add('todo_item');
      wait_div.appendChild(todo_item_div)
      const item = document.createElement('p');
      item.innerHTML = input
      todo_item_div.appendChild(item)
      const function_div = document.createElement('div')
      function_div.classList.add('function')
      todo_item_div.appendChild(function_div)
      const editimg = document.createElement('img')
      editimg.src = edit
      const trashcanimg = document.createElement('img')
      trashcanimg.src = trashcan
      const checkimg = document.createElement('img')
      checkimg.src = checked
      //function_div.appendChild(editimg)
      function_div.appendChild(trashcanimg)
      function_div.appendChild(checkimg)
      input_filed.value = "";

      //勾選後移到完成項目
      const done_div = document.querySelector('.done_wrapper')
      checkimg.onclick = function () {
        const done_item_div = document.createElement('div')
        const done_item_text = document.createElement('p')
        const done_item_function = document.createElement('div')
        const done_trashcan = document.createElement('img')
        const undo = document.createElement('i')
        undo.innerHTML = '<i class="fa-solid fa-rotate-left"></i>'
        done_item_div.classList.add('done_item')
        done_item_function.classList.add('done_function')
        done_item_text.innerHTML = input
        done_trashcan.src = trashcan
        done_div.appendChild(done_item_div)
        done_item_div.appendChild(done_item_text)
        done_item_div.appendChild(done_item_function)
        done_item_function.appendChild(done_trashcan)
        todo_item_div.parentNode.removeChild(todo_item_div)
        done_item_function.appendChild(undo)

        //刪除項目
        done_trashcan.onclick = function () {
          done_item_div.parentElement.removeChild(done_item_div)
        }

        //復原項目
        undo.onclick = function () {
          submit()
          done_item_div.parentElement.removeChild(done_item_div)
        }
      }

      //刪除項目
      trashcanimg.onclick = function () {
        todo_item_div.parentNode.removeChild(todo_item_div)
      }
    } else {
      alert('請輸入代辦事項')
    }
  }

  return (
    <div className="container">
      <h2>To-do List</h2>
      <div className='input_wrapper'>
        <input className='input_box' placeholder='輸入代辦事項' maxLength="23" value={input} onInput={e => setInput(e.target.value)}></input>

        <i className="fa-solid fa-circle-plus" onClick={submit}></i>
      </div>
      <div className='item_container'>
        <div className='wait_wrapper'>
          <h2>代辦事項</h2>
          {/*} <div className='todo_item'>
            <p>完成todolist app</p>
            <div className='function'>
              <img src={edit} alt=""></img>
              <img src={trashcan} alt=""></img>
              <img src={check} alt=""></img>
            </div>
  </div>*/}
        </div>
        <div className='done_wrapper'>
          <h2>完成項目</h2>
          {/*
          <div className='done_item'>
            <p>未完成</p>
            <div className='done_function'>
              <img src={trashcan} alt=""></img>
            </div>
</div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
