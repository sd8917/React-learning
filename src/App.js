import React from 'react'
import UserListWithLoader from "./hoc/userList";


function App() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setUsers([{ id: 1, name: "John" }, { id: 2, name: "Alice" }]);
      setLoading(false);
    }, 2000);
  }, []);

  return <UserListWithLoader isLoading={loading} users={users} />;
}

export default App;