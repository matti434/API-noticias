import React, { useEffect, useState } from 'react'
import { ClimaServicio } from './ClimaServicio'


export const ApiClima = ({latitud,longitud}) => {
   
   const [dataApi,setDataApi] = useState(null);
   const [loading,setLoading] = useState(true);
   useEffect (() => {
     
     const fechtClima = () => {
        try{
            const data = ClimaServicio(latitud,longitud);
            setDataApi(data);
        }catch(error){
          console.error("Error al cargar los datos"); 
        }finally{
          setLoading(false);
        }
     }

     fechtClima();

   }, [latitud,longitud]);

    if (loading) return <div>Cargando...</div>;
    if (!dataApi) return <div>Error al cargar el clima</div>;

    return children(climaData);
}
