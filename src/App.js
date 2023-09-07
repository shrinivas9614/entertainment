import { Route, Routes } from "react-router-dom";
import { Main,Marval } from "./utils";

 function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      <Route path="/:id" element={ <Marval /> } />
      </Routes>
      {/* <Card /> */}
    </div>
  );
}

export default App;


// animelist ? (
//   animelist.map((anime, index) {
//   return (
//   <div className="card">
//   <img images .jpg. alt="animelmage"
//   <div className="anime-info">
//   < titlefr< /h4>
//   </div>
//   : "Not Found"