import React, { useEffect, useState } from 'react'
import { ClimaServicio } from './ClimaServicio'
export const ApiClima = async() => {
   
   const [dataApi,setDataApi] = useState(null);
   const [loading,setLoading] = useState(true);
   useEffect (() => {
     
     const fechtClima = async () => {
        try{
            const data = await ClimaServicio(longitud,latitud);
            setDataApi(data);
        }catch(error){
          console.error("Error al cargar los datos"); 
        }finally{
          setLoading(false);
        }
     }

     fechtClima();

   }, [longitud,latitud]);

    if (loading) return <div>Cargando...</div>;
    if (!dataApi) return <div>Error al cargar el clima</div>;

    return children(climaData);
}
