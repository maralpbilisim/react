import Counter from "./components/Counter"
import IncreaseByTwo from "./components/IncreaseByTwo"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"

function App() {
  return (
    <div>
   <Counter></Counter>
   <IncreaseCounter></IncreaseCounter>
   <DecreaseCounter></DecreaseCounter>
   <IncreaseByTwo></IncreaseByTwo>
    </div>
  );
}

export default App;
