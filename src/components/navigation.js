import React , {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { activeKey: 1 };
        this.handleSelect = this.handleSelect.bind(this);
      }
    
    handleSelect(selectedKey) {
      this.setState({activeKey: selectedKey});
    }
    
    render() {
      return (
        <Navbar scrolling sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand eventKey="Home" onClick={this.handleSelect}><Link to="About" smooth={true}>_AlexaKing|</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav
        activeKey="Home"
        // onSelect={selectedKey => this.refs.about.scrollIntoView()}
      >
        <Nav.Item>
          <Nav.Link eventKey="About"><Link to="About" smooth={true}>About</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Projects"><Link to="Projects" smooth={true}>Projects</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Contact"><Link to="Contact" smooth={true}>Contact</Link></Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
    }
    };