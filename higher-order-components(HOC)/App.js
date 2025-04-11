import React from "react";
import UserList from "./UserList";
import withLoader from "./withLoader";

const App = () => {
  const list = ["Alice", "Bob", "Charlie"];
  const EnhancedUserList = withLoader(UserList, list);

  return (
    <div>
      <h1>Team List</h1>
      <EnhancedUserList />
    </div>
  );
};
export default App;
