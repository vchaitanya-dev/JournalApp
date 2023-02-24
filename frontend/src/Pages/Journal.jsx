import React,{useContext} from 'react'
import JournalContext from '../Hook/JournalContext'
import  Header from '../Components/Header'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer';
function Journal() {
  const {data,setUpdateId,deleteData} = useContext(JournalContext);
  return (
   <>
   <Header />
   <div className="container">
   <Card key={data._id} className='card' >
 <Card.Header>{data.title}</Card.Header>
 <Card.Body>
   <Card.Text >{data.journal}</Card.Text>
 </Card.Body>
 <div className='flex'>
<Link to={`/journal/:${data._id}`} 
 onClick={() => setUpdateId(data._id)} className="update">Edit</Link>
<Button onClick={() => deleteData(data._id)}>Delete</Button>
</div>
</Card>

   </div>
   <Footer />
   </>
  )
}

export default Journal