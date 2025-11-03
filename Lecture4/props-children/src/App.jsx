import ChildDemo from "./components/ChildDemo";
import "./App.css";

function App() {
  return (
    <>
    
      <ChildDemo>
        <h1>Hello , I am Learning Props.Children Functionality</h1>
        <p>I am Learning React.JS</p>
      </ChildDemo>

      <ChildDemo children="This is a Another way of syntax ">
      </ChildDemo>
    </>
  );
}

export default App;
