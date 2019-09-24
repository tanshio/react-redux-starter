import React, { useCallback } from 'react'
import styled from 'styled-components'

const TodoContainer = styled.div`
  background-color: #000;
  color: #ffffff;
`

const TodoButton = styled.button``

interface TodoProps {
  title: string
}

interface TodoItemProps {
  index: number
  onRemove: (index: number) => void
}

export interface TodosProps {
  todos: TodoProps[]
  onRemove: (index: number) => void
}

const Todo = React.memo((props: TodoProps & TodoItemProps) => {
  const remove = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      props.onRemove(props.index)
    },
    [props]
  )

  return (
    <TodoContainer>
      {props.title}{' '}
      <TodoButton type="button" onClick={remove}>
        削除
      </TodoButton>
    </TodoContainer>
  )
})

export const Todos = React.memo((props: TodosProps) => {
  const removeTodo = useCallback(
    (e, i) => {
      props.onRemove(i)
    },
    [props]
  )

  return (
    <>
      {props.todos.map((todo, i) => {
        return (
          <Todo
            title={todo.title}
            index={i}
            key={i}
            onRemove={(e) => removeTodo(e, i)}
          />
        )
      })}
    </>
  )
})
