import React from "react";
import { CardClima } from "../ComponenteHome/CardClima";

const Home = () => {
  return (
    <>
      <div>
        <div className="d-flex flex-column align-items-center">
        <h1>Mi App del Clima</h1>
        <CardClima latitud={-34} longitud={-64} />
        <CardClima latitud={40.71} longitud={-74.01} />
        </div>
      </div>
    </>
  );
};
export default Home;