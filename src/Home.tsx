import React from "react";
import { Link } from "react-router-dom";

function Teste() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/Sobre"}>Sobre</Link>
    </div>
  );
}

export default Teste;
