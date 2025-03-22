import "./App.css";
import CardDemo from "./components/CardDemo";
import ConditionalRenderDemo from "./components/ConditionalRenderDemo";
import CounterDemo from "./components/CounterDemo";
import DataFetchingDemo from "./components/DataFetchingDemo";
import FuncCompDemo from "./components/FuncCompDemo";
import ListDemo from "./components/ListDemo";
import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <>
      {/* <ListDemo /> */}
      {/* <ConditionalRenderDemo /> */}
      {/* <StyledComponent /> */}
      {/* <FuncCompDemo name="Anusha" age={24} place="Bangalore" /> */}
      {/* <CounterDemo /> */}
      {/* <CardDemo name="Anusha" job="Software" city="Bangalore" />
      <CardDemo name="Jeevan" job="Telecom" city="Eluru" /> */}
      <DataFetchingDemo />
    </>
  );
}

export default App;
