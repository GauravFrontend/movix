import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  const dispatch = useDispatch()
  const url = useSelector((state) => state.home.url)
  const apiTest = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res)
        dispatch(getApiConfiguration(res))
      })
  }


  useEffect(() => {
    apiTest()
  }, []);



  return(
    <>
    <Header/>
    <Footer/>
    </>
  )
}

export default App;
