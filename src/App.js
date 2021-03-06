import React from 'react';
import './App.css';

import MyNewComponent from './components/MyNewComponent';
import PersonCard from './components/PersonCard';

const divStyle = {
  margin: '25px'
};

const newCompStyle = {
  marginLeft: '250px'
}

const buttonStyle = {
  color: 'yellow',
  background: 'gray',
  fontSize: '16px',
  height: '5em',
  width: '15em',
  borderRadius: '25px'
}

const personStyle = {
  textAlign: 'center',
  padding: '20px',
  margin: '25px'
};

function App() {
  return (
    <>
      <div style={divStyle}>
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do:</h3>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
      <div style={newCompStyle}>
        <MyNewComponent someText={'This is a Prop'} />
        <button style={buttonStyle} onClick={()=>alert('You clicked the button')}>Click the Alert Button</button>
      </div>
      <div style={personStyle}>
        <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'} />
        <PersonCard firstName={'John'} lastName={'Smith'} age={88} hairColor={'Brown'} />
        <PersonCard firstName={'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
        <PersonCard firstName={'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'} />
      </div>
    </>
  );
}

export default App;
