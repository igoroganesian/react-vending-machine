import React from "react";
import { useParams, Link } from "react-router-dom";

function Snack() {
  const params = useParams();
  return (
    <div className="Snack">
      <h1>snack page for: {params.name}</h1>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default Snack;