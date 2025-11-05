import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ClimaServicio } from './APIS/ClimaServicio';

export const CardClima = ({ latitud = -34, longitud = -64 }) => {
  const [climaData, setClimaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ClimaServicio(latitud, longitud);
        setClimaData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClima();
  }, [latitud, longitud]);


  if (loading) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>Cargando clima...</Card.Body>
      </Card>
    );
  }

  if (error) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>Error: {error}</Card.Body>
      </Card>
    );
  }

  if (!climaData) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>No hay datos del clima</Card.Body>
      </Card>
    );
  }

 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Clima Actual</Card.Title>
        <Card.Text>
          <strong>📍 Ubicación:</strong> {latitud}, {longitud}<br/>
          <strong>🌡️ Temperatura:</strong> {climaData.current.temperature_2m}°C<br/>
          <strong>🕐 Hora:</strong> {new Date(climaData.current.time).toLocaleTimeString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
