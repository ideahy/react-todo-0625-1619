import styled from "styled-components";

export const IncompleteList = (props) => {
  const { incompleteListP, listDeleteP, listCompleteP } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteListP.map((todo, index) => {
          return (
            <ListStyle key={todo}>
              <li>{todo}</li>
              <button onClick={() => listCompleteP(index)}>完了</button>
              <button onClick={() => listDeleteP(index)}>削除</button>
            </ListStyle>
          );
        })}
      </ul>
    </div>
  );
};

const ListStyle = styled.div`
  background-color: "#c6ffe2";
  width: "400px";
  min-height: "200px";
  padding: "8px";
  margin: " 8px";
  border-radius: "8px";
`;
