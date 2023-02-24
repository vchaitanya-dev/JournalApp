import React,{useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import {Button, Form} from 'react-bootstrap'
import BookContext from '../Hook/JournalContext'
import Footer from '../Components/Footer'
function NewJournal() { 
const {postData} = useContext(BookContext)
const navigate = useNavigate()  
const [formData, setFormData] = useState({
            journal:"",
            title:""
           })
         const {title, journal} = formData;
           const onChange = (e) => {
             setFormData((prevState) => ({
               ...prevState,
               [e.target.id] : e.target.value,
             }))
           }
           
           const onSubmit = (e) => {
             e.preventDefault();
              postData(formData);
              navigate('/')
           }
  return (
    <>
    <Header />
      <div className='form'>
      <h2>Add Journal</h2>
      <Form>
      <Form.Group  className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control  type="text" value={title}
            id="title"  placeholder="Enter heading" 
              onChange={onChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Control as="textarea" value={journal}
             id="journal" rows={15} 
             onChange={onChange}/>
        </Form.Group>
      <Button onClick={onSubmit} className="ml-10">Submit</Button>
</Form>
     </div>
     <Footer />
     </>
  )
}
export default NewJournal;