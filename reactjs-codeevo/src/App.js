import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
// import Greet from "./components/Greet";
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import GreetWithProp from "./components/GreetWithProp";
// import GreetWithPropC from "./components/GreetWithPropC";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
        {/* <GreetWithProp name="Jonathan Joestar" secretName="Jo Jo">
          THIS IS THE PROPS.CHILDREN CONTENT 1.
        </GreetWithProp> */}
        {/* <GreetWithProp name="Luffy" secretName="Straw Hat">
          THIS IS THE PROPS.CHILDREN CONTENT 2.
        </GreetWithProp> */}
        {/* <GreetWithPropC name="Jonathan Joestar" secretName="Jo Jo">
          THIS IS THE PROPS.CHILDREN CONTENT 1.
        </GreetWithPropC> */}
        {/* <GreetWithPropC name="Luffy" secretName="Straw Hat">
          THIS IS THE PROPS.CHILDREN CONTENT 2.
        </GreetWithPropC> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <Stylesheet primary={false} /> */}
        {/* <h1 className="error">DONT'T USE NORMAL STYLING USE CSS MODULES</h1> */}
        <Form />
      </div>
    );
  }
}

export default App;
