import Button from "./components/Button";
import Login from "./components/Login";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import useClipboard from "./hooks/useClipboard";
function App() {

  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
  const {value} = useLocalStorage("theme", "light");
  const {copied, copy} = useClipboard();
  return (
    <div>
      <Button />
      <Login />
      <button onClick={() => copy("Hello sudhanshu raj")}>{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
}

export default App;
