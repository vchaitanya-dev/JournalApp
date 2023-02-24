import React from 'react'
import BookContext from './Hook/JournalContext'
import { Link} from "react-router-dom"
import loading from './assets/loading.gif';
import Header from './Components/Header'
import { Card } from 'react-bootstrap';
import Footer from './Components/Footer';
function App() {
  const {journal, isloading, getDataId} = React.useContext(BookContext) 
  return isloading ? (
    <img className='image' src={loading} alt="loading"/>
  ):(
    <>
    <Header />
   <div className='container'>
     {journal.map((jour) => (
<Card key={jour._id} className='card' >
 <Card.Header>{jour.title}</Card.Header>
 <Card.Body>
   <Card.Text className='cardText'>{jour.journal}</Card.Text>
 </Card.Body>
<Link to={`/get/${jour._id}`} onClick={() => getDataId(jour._id)} className="link">Read more</Link>
</Card>
     ))}
   </div>
<Footer />
   </>
  )
}

export default App;