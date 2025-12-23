
// import Counter from "./Counter";

import useCounter from "./useCounter";

// import withCounter from "./Hoc";


const App = () => {
  console.log("called ")
  const {count, decrement, increment} = useCounter(3);
  return (<>
  <h1>Counter {count}</h1>
  <button onClick={increment}>ADD +</button>
  <button onClick={decrement}>Dec -</button>
  </>)
}
// function App() {
//   return (
//    <ThemeProvider>
//     <Header />
//     <QueryProvider />
//   </ThemeProvider>
//   );
// }

export default App;
