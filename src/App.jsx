import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Fragments/Header";
import Router from "./router/RouterApp";
import { Toaster } from "react-hot-toast";
import LoadingBar from "react-redux-loading-bar";

const App = () => {
  return (
    <Fragment>
      <LoadingBar />
      <Header />
      <BrowserRouter basename="/">{Router()}</BrowserRouter>
      <Toaster />
    </Fragment>
  );
};

export default App;
