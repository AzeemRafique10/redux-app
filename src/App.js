import "./App.css";
// import Home from "./components/Home";
// import User from "./Props/User";
import HomeContainer from "./containers/HomeContainer";

const App = () => {
  return (
    <div className="App">
      {/* <User data={{ name: "Azeem", last: "Rafique", age: 26 }} /> */}
      {/* <Home /> */}

      <HomeContainer />
    </div>
  );
};

export default App;
