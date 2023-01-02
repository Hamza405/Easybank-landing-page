import React from "react";
import Easybank from "./components/Easybank/Easybank";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Easybank />
    </div>
  );
};

export default App;
