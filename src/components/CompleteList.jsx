export const CompleteList = (props) => {
  const { completeListP, listBackP } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeListP.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => listBackP(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
