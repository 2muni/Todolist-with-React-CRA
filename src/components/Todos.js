import React from 'react'
import 'stylesheets/Todos.css'

const Form = ({ value, onChange, onInsert, onKeyPress }) =>
  <div className="form">
    <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
    <div className="create-button" onClick={onInsert}>
      추가
    </div>
  </div>

const TodoItem = ({ id, text, checked, onToggle, onRemove }) =>
  <li className="todo-item" onClick={() => onToggle(id)}>
    <div className="remove" onClick={(e) => {
        e.stopPropagation()
        onRemove(id)}
    }>&times;</div>
    <div className={`todo-text ${checked && 'checked'}`}>
      <div>{text}</div>
    </div>
    {checked && (<div className="check-mark">✓</div>)}
  </li>



const Todos = ({ input, todos, onChange, onInsert, onToggle, onRemove, onKeyPress }) =>{

  const todolist = todos.map(
    todo => {
      const { id, checked, text } = todo.toJS();
      return (
        <TodoItem
          id={id}
          checked={checked}
          text={text}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    }
  )

  return(
    <section className="todo-list">
      <div className="title">오늘 할 일</div>
      <div className="form-wrapper">
        <Form value={input}
          onChange={onChange}
          onInsert={onInsert}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="todos-wrapper">
        {(todos.toJS().length === 0) ?
          <div className="todo-empty">오늘 할 일이 없습니다!</div> :
          <ul>{todolist}</ul>
        }
      </div>
    </section>
  )
}
export default Todos
