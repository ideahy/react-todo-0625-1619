import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteList } from "./components/IncompleteList";
import { CompleteList } from "./components/CompleteList";

export const App = () => {
  //入力値ステート(onChangeで変更を検知 → 初期値を変更)
  const [todoText, setTodoText] = useState("");
  //未完了ステート
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  //完了ステート
  const [completeTodos, setCompleteTodos] = useState([]);
  //変更を検知(引数eventの値を入力値ステートに反映)
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //入力値を未完了ステートに反映(ステートに入力値を追加 → mapで表示)
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  //未完了ステートから削除
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  //未完了ステートから削除＋完了ステートへ追加
  const onClickComplete = (index) => {
    //未完了ステートから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    //完了ステートへ追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  //完了ステートから削除＋未完了ステートへ追加
  const onclickBack = (index) => {
    //完了ステートから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    //未完了ステートへ追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoTextP={todoText}
        onChangeP={onChangeTodoText}
        onClickP={onClickAdd}
      />
      <IncompleteList
        incompleteListP={incompleteTodos}
        listDeleteP={onClickDelete}
        listCompleteP={onClickComplete}
      />
      <CompleteList completeListP={completeTodos} listBackP={onclickBack} />
    </>
  );
};
