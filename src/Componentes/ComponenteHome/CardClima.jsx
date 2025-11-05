import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ApiClima } from './APIS/ApiClima';
import { data } from 'react-router';

export const CardClima = ({latitud=-34 , longitud=-64}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title><ApiClima latitud={latitud} longitud={longitud} /></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  )
}

