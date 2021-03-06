import React from "react";
import { CreateTodoButton } from "../TodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import {TodoContext} from '../TodoContext'
import {Modal} from '../Modal'
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";
function AppUI(){
    const {
      error,
      loading,
      searchedTodos,
      completeTodos,
      deleteTodos,
      openModal,
      setOpenModal
    } =  React.useContext(TodoContext);

    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch />
      
      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading/>}
        {(!loading &&!searchedTodos.length) && <EmptyTodos/>}


        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export {AppUI};