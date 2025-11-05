export const ClimaServicio = async () => {
  
    
    const respuesta = await fetch( `https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&hourly=temperature_2m&timezone=America%2FSao_Paulo`);

    if(!respuesta){
        throw new Error("Datos no recibidos");
    }
    
}
