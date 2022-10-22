import ClassA from "./classA";
function App() {
  return (
    <div className="mydiv">
      <h1>To do list</h1>
      <h2>Today</h2>
    <ClassA list={["walk","cook","bake"]}/>
    <h2>Tomorrow</h2>
    <ClassA list={["study","code","eat"]}/>
    <hr />
    </div>
  );
}

export default App;
