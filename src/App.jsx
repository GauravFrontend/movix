import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";


function App() {

  const apiTest = () => {
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res)
      })
  }


  useEffect(() => {
    apiTest()
  }, []);



  return <>app</>;
}

export default App;
