const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoTextP, onChangeP, onClickP } = props;
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoTextP} onChange={onChangeP} />
      <button onClick={onClickP}>追加</button>
    </div>
  );
};
