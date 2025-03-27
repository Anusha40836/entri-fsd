import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Card from "./components/Card";
import ButtonComp from "./components/ButtonComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavigationBar from "./components/Task5/NavigationBar";
import MainCardContent from "./components/Task5/MainCardContent";
import CardComp from "./components/Task3/CardComp";

function App() {
  return (
    <>
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* <Card
        title="EYE"
        content="Eye of model with colorful art make-up, close-up stock photo"
      /> */}
      {/* <ButtonComp /> */}
      {/* <NavigationBar />
      <MainCardContent /> */}
      <CardComp
        title="Anusha"
        text="This is first Resuable card component called Anusha"
        image="https://via.placeholder.com/300"
      />
    </>
  );
}

export default App;
