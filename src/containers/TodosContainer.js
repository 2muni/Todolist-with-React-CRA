import React, { Component } from 'react'
import Todos from 'components/Todos'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from 'store/modules/todo'

class TodosContainer extends Component {
  handleChange = (e) => {
    const { TodoActions } = this.props
    TodoActions.changeInput(e.target.value)
  }
  handleInsert = () => {
    const { input, TodoActions } = this.props
    TodoActions.insert(input)
    TodoActions.changeInput('')
  }
  handleToggle = (id) => {
    const { TodoActions } = this.props
    TodoActions.toggle(id)
  }
  handleRemove = (id) => {
    const { TodoActions } = this.props
    TodoActions.remove(id)
  }
  handleKeyPress = (e) => {
    (e.key === 'Enter') && this.handleInsert()
  }

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove, handleKeyPress } = this
    const { input, todos } = this.props

    return(
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
        onKeyPress={handleKeyPress}
      />
    )
  }
}

export default connect(
  ({ todo }) => ({
    input: todo.get('input'),
    todos: todo.get('todos')
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(TodosContainer)
