import React, {useState} from "react";

import { Map } from "./components/Map";
import "./assets/sass/dark.scss";



function App() {
  const [isDarkMode, setIsDarkMode]=useState(false);
  const toggleDarkMode=()=>{
    setIsDarkMode(!isDarkMode);
  };
  return (
   <div className={isDarkMode? "app dark-mode":"app light-mode"}>
    <h1>{isDarkMode? "🌙 다크 모드입니다" : "☀️ 라이트 모드입니다"}</h1>
    <button onClick={toggleDarkMode}>{isDarkMode ? "밝게 보기" : "어둡게 보기"}</button>
   
   
   </div>


  );
}

export default App;
