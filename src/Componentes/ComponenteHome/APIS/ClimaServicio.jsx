export const ClimaServicio = async (latitud,longitud) => {
  
    /*
    const respuesta = await fetch( `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m&timezone=America%2FSao_Paulo`);
    */

    const respuesta = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m&timezone=auto`);
    
    if(!respuesta){
        throw new Error("Datos no recibidos");
    }


    const data = await respuesta.json();
    return data;
    
}
