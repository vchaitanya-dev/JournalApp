import React,{useState,useEffect} from 'react'
import axios from 'axios'
const JournalContext = React.createContext()
export const JournalProvider = ({children})=> {
      const [isloading,setIsLoading] = useState(true)
      const [journal,setJournal] = useState([])
      const [data, setData] = useState([])
      const [updateid, setUpdateId] = useState(0)
      useEffect(() => {
      fetchData();
},[])
      // get request
const fetchData = () => {
      axios
      .get('http://localhost:4050/api/get')
      .then((response) => {
            setJournal(response.data);
            setIsLoading(false);
      })
}
const postData = (newNote) =>{
      axios
      .post('http://localhost:4050/api/post', newNote)
      .then((response) => {
            setJournal([response.data,newNote]);
            setIsLoading(false)
      })
} 

const deleteData = (id) => {
      if(window.confirm("Are you sure you want to delete?")){
      axios
      .delete(`http://localhost:4050/api/delete/${id}`)
      }
      setJournal(journal.filter((jour) => jour.id !== id))
}

const updateData = (updateid, updatedData) => {
      axios
        .put(`http://localhost:4050/api/update/${updateid}`,updatedData)
        .then((response) => {
            setJournal(response.data)
        })

}
const getDataId =  (id) => {
      axios
      .get(`http://localhost:4050/api/get/${id}`)
      .then((response) => {
            setData(response.data);
            setIsLoading(false);
      })

}
return (
      <JournalContext.Provider value={{journal,isloading, postData, deleteData,
       updateData,data, getDataId,updateid, setUpdateId
      }} >
            {children}
      </JournalContext.Provider>
)      
}

export default JournalContext