import Cities from '../components/cities'
import When from '../components/when'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ZoneChunk(props) {
    const zones = props.zones;
    return <Row>

    {zones.map((zone, index) => {
      return <Col><Card key={index}>
        <Card.Body>
          <Card.Title>ZoneChunk Title</Card.Title>
          <Card.Text>It&apos;s <When name={zone.name} /> on {zone.alternativeName} in <Cities cities={zone.mainCities} /> in {zone.countryName}</Card.Text>
        </Card.Body>
        </Card></Col>
    })}
    {zones.length == 1 &&
        <Col />
    }
    {zones.length == 1 &&
        <Col />
    }
    {zones.length == 2 &&
        <Col />
    }
    </Row>
  }

export default ZoneChunk;