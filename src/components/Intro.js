import React, {Component} from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Button from 'react-bootstrap/Button';

export default class Intro extends Component {
 
    render() {
      return (
          <div>
        <Typist>
                Hi. I'm Alexa :-) <br></br>
                I'm a full-stack web developer. <br></br> 
        </Typist>
        <br></br>
        <Button id = 'welcomeButton'>Continue</Button>
        </div>
      );
    };
  };