import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ApiClima } from './APIS/ApiClima';
import { data } from 'react-router';

export const CardClima = ({latitud=-34 , longitud=-64}) => {

  const climaInfo = ApiClima({latitud,longitud});

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  )
}

