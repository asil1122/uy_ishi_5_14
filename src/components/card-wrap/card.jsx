import React, { useContext } from "react";
import { TodoProviderWrapper } from "../../providers/todo_provider";
import { DELETE_USER, EDIT_USER } from "../../providers/todo_provider/todo-types";

export const CardWrapper = () => {
  const { data, dispatch } = useContext(TodoProviderWrapper);

  const deleteItem = (id) => {
    dispatch({ type: DELETE_USER, id });
  };

  const editItem = (id) => {
    const editname = prompt("Enter new Name");
    if (editname) {
      dispatch({ type: EDIT_USER, id, value: { user_name: editname } });
    }
  }

  return (
    <div>
      {data?.users?.map((item) => (
        <div key={item.id}>
          <h1>{item.user_name}</h1>
          <button onClick={() => deleteItem(item.id)}>delete</button>
          <button onClick={() => editItem(item.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};
