import { EnhaceCompontWithPostData, EnhaceCompontWithUserData } from "./hoc";


function App() {
  
  return (
    <>
      <h1>My App</h1>
      {/* <UserCompon users={[{name:"sudhanshu"}, {name:"Raju"}]}/> */}
      <EnhaceCompontWithUserData title="All User"  url={"https://jsonplaceholder.typicode.com/users"}/>

      <EnhaceCompontWithPostData title="All Post" url={"https://jsonplaceholder.typicode.com/posts"}/>
    </>
  );
}

export default App;
