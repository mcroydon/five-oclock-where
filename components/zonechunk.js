import Cities from '../components/cities'
import When from '../components/when'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ZoneChunk(props) {
    const zones = props.zones;
    return <Row>

    {zones.map((zone, index) => {
      return <Col sm={4} className="my-4"><Card key={index} className="h-100">
        <Card.Body>
          <Card.Title>{zone.alternativeName}</Card.Title>
          <Card.Text>It&apos;s <When name={zone.name} /> on {zone.alternativeName} in <Cities cities={zone.mainCities} /> in {zone.countryName}</Card.Text>
        </Card.Body>
        </Card></Col>
    })}
    {zones.length == 1 &&
        <Col sm={4}/>
    }
    {zones.length == 1 &&
        <Col sm={4} />
    }
    {zones.length == 2 &&
        <Col sm={4}/>
    }
    </Row>
  }

export default ZoneChunk;