import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom"
 import Note from '../assets/Note.png';
function Header() {
  return (
<>
<Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand >Journal App </Navbar.Brand>
          <Link to="/newjournal">
        <img src={Note} alt="img"className="addImg"/>
    </Link>
        </Container>
      </Navbar>
    </Container>
</>
  )
}

export default Header