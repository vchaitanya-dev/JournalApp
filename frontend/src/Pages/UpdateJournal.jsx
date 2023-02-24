import React,{useState} from 'react'
import Header from '../Components/Header'
import BookContext from '../Hook/JournalContext'
import { useNavigate } from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'
import Footer from '../Components/Footer'
function UpdateJournal() {
  const { updateid , updateData} = React.useContext(BookContext) 
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
            title:"",
            journal:""
           })
 
           const onChange = (e) => {
             setFormData((prevState) => ({
               ...prevState,
               [e.target.id] : e.target.value,
             }))
            }           
            const {title, journal} = formData;
           const onSubmit = (e) => {
             e.preventDefault();
            updateData(updateid,formData);
            navigate('/')
          }
return  (
  <>
  <Header />
  <Form className='form'>
      <Form.Group  className="mb-1">
            <Form.Label>Heading</Form.Label>
            <Form.Control type="text" value={title} id="title" placeholder="Enter heading" 
              onChange={onChange}
            />
        </Form.Group>
        <Form.Group  className="mb-3">
            <Form.Label>Journal</Form.Label>
            <Form.Control as="textarea" value={journal} id="journal" rows={15} 
             onChange={onChange}/>
        </Form.Group>
      <Button onClick={onSubmit} className="ml-10">Update</Button>
</Form>

<Footer />
  </>
)
}
export default UpdateJournal;
