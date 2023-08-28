import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Snack from "./Snack";
import NavBar from "./Nav";

const DEFAULT_SNACKS = [
  {name: "onigiri", id: 1},
  {name: "mochi", id: 2},
  {name: "almonds", id: 3}]

function VendingMachine() {
  const [snacks, setSnacks] = useState(DEFAULT_SNACKS);

  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar snacks={snacks}/>} />
          <Route path="/snack/:name" element={<Snack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;