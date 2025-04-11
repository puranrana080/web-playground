import React from "react";
const UserList = ({ items }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {items.map((user, index) => {
        return <li key={index}>{user}</li>;
      })}
    </ul>
  );
};
export default UserList;
