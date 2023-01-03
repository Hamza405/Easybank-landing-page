import React from "react";
import Articles from "./components/Articles/Articles";
import Easybank from "./components/Easybank/Easybank";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Easybank />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
