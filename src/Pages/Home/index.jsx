import React from "react";
import MainScreen from "../../Components/HomePage/MainScreen";
import AboutUs from "../../Components/HomePage/AboutUs";
import AdmTeam from "../../Components/HomePage/AdmTeam";
import Books from "../../Components/HomePage/Books";
import Projects from "../../Components/HomePage/Projects";
import Institutions from "../../Components/HomePage/Institutions";
import ShopCartButton from "../../Components/ShopCartButton";

function Home(props) {
  const { title } = props;
  document.title = title;
  
  return (
    <>
      <MainScreen />
      <AboutUs />
      <AdmTeam />
      <Books />
      <Projects />
      <Institutions />
      <ShopCartButton />
    </>
  );
}

export default Home;
