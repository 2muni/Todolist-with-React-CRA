import { createAction, handleActions } from 'redux-actions'
import { Map, List } from 'immutable'

const CHANGE_INPUT = 'todo/CHANGE_INPUT'
const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'

export const changeInput = createAction(CHANGE_INPUT, value => value)
export const insert = createAction(INSERT, text => text)
export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id => id)

const initialState = Map({
  input: '',
  todos: List([
    Map({
      id: 0,
      text: '걷기',
      checked: false
    }),
    Map({
      id: 1,
      text: '밥먹기',
      checked: true
    })
  ])
})

let id = initialState.get('todos').toJS().length

export default handleActions({
  [CHANGE_INPUT]: (state, {payload}) =>
    state.set('input', payload),
  [INSERT]: (state, {payload: text}) => {
    const item = Map({ id: id++, text, checked: false });
    return state.update('todos', todos => todos.push(item))
  },
  [TOGGLE]: (state, {payload: id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id)
    return state.updateIn(['todos', index, 'checked'], checked => !checked)
  },
  [REMOVE]: (state, {payload: id}) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id)
    return state.deleteIn(['todos', index])
  }
}, initialState)
