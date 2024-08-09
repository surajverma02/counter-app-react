import Counter10 from "./components/Counter10";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <div className="bg-orange-400 flex h-screen gap-5 justify-center items-center">
        <Card username="dev1"/>
        <Card username="dev2"/>
      </div>
      <Counter10 />
    </>
  );
}

export default App;
