import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Context from "./Context";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MobileMenu from "./Components/MobileMenu";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Support from "./Pages/Support";

function App() {
  const [isShowLanguageButton, setIsShowLanguageButton] = useState(false);
  const [isMobileMenuButtonActive, setIsMobileMenuButtonActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScreenWidthLess1025, setIsScreenWidthLess1025] = useState(false);
  const [orderList, setOrderList] = useState(JSON.parse(localStorage.getItem('orderList')) || []);
  const [totalSum, setTotalSum] = useState(JSON.parse(localStorage.getItem('totalSum')) || null);
  const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem('cartCount')) || null);

  const handlerShowLanguageButton = () => {
    setIsShowLanguageButton((prevState) => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1025) {
          setIsScreenWidthLess1025(false);
        } else {
          setIsScreenWidthLess1025(true);
        }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(isMobileMenuButtonActive);
    isMobileMenuButtonActive ? (
      document.querySelector('body').setAttribute('style', 'overflow-y: hidden')
    ) : (
      document.querySelector('body').setAttribute('style', '')
    );
  }, [isMobileMenuButtonActive]);

  useEffect(() => {
    isMobileMenuOpen ? (
      setIsMobileMenuButtonActive((prevState) => !prevState)
    ) : (
      setTimeout(() => {
        setIsMobileMenuButtonActive((prevState) => !prevState)
      }, 290)
    )
  }, [isMobileMenuOpen])

  const value = {
    isShowLanguageButton,
    handlerShowLanguageButton,
    orderList,
    setOrderList,
    totalSum,
    setTotalSum,
    cartCount,
    setCartCount,
    isMobileMenuButtonActive,
    setIsMobileMenuButtonActive,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  };
  return (
    <Router>
      <Context.Provider value={value}>
        <div className="wrap">
          <Header />
          {
            isScreenWidthLess1025 && (
              isMobileMenuButtonActive && <MobileMenu />
            )
          }
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home title={"Департамент освіти УЦХВЄ"} />} />
              <Route path='/order' element={<Order title={"Департамент освіти УЦХВЄ - Замовлення книг"} />} />
              {/* <Route path='/support' element={<Support title={"Департамент освіти УЦХВЄ - Підтримати"} />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
