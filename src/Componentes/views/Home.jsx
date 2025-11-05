import React from "react";
import { CardClima } from "../ComponenteHome/CardClima";

export const Home = () => {
  return (
    <>
      <div>
        <h1>Mi App del Clima</h1>
        <CardClima latitud={-34} longitud={-64} />
        <CardClima latitud={40.71} longitud={-74.01} />
      </div>
    </>
  );
};
