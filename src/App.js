import Name from './Components/Name';
import Price from './Components/Price';
import Image from './Components/Image';
import Description from './Components/Description';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');

  const handleInputChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <div className='work'>
      <Card style={{ width: '25rem' }}>
        {/* This is the image */}
      <Image className="Image" style={{ width: '15rem', height: '20rem' }} />
      <Card.Body>
        <Name />
        <Description />
        <Price />
        {/* This is a button */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <div>
      {/* This is the input */}
      Hello, {firstName ? firstName : 'there'}!
      {firstName && <img src= "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lexus/LX/8657/1671778873338/front-left-side-47.jpg" alt='my p' className='screen' />}
    </div>

    <input
          type="text"
          placeholder="type your name here"
          value={firstName}
          onChange={handleInputChange}
        />
    </div>
    
    
  );
}

export default App;
