import { useState } from "react";
import "./styles.css";

export const App = () => {
  //入力値ステート(onChangeで変更を検知 → 初期値を変更)
  const [todoText, setTodoText] = useState("");
  //未完了ステート
  const [incompleteTodos, setIncompleteTodos] = useState([
    "アイウエオ",
    "かきくけrこ"
  ]);
  //完了ステート
  const [completeTodos, setCompleteTodos] = useState(["うアウアウあ"]);
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
  //未完了ステートから削除＋完了ステートへ移動

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
