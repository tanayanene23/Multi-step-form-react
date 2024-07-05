import Sidebar from '../Sidebar/Sidebar'
import Pages from '../Pages/Pages'
import './Container.css'

import { useState } from 'react'

function Container() {

    // state to save error states for page 1 - form information
    const [formError, setFormError] = useState(true)


    // state to save error state for page 2 - plan selection
    const [planError, setPlanError] = useState(true)



    // state for saving form data
    const [input, setInput] = useState({
      Name: "",
      Email: "",
      Number: ""
    })

    console.log(input.Name)
  
  const[page, setPage] = useState(1)

  const nextPage = () => {
    if(page==1 && formError===true){
      setPage(1)
      alert("Enter details")
    }
    else if(page==2 && planError===true){
      setPage(2)
      alert("Select a plan")
    }
    else{
      setPage(page => page + 1)
    }
  }

  const prevPage =() => {
    setPage(page => page - 1)
  }
  
  return (
    <div className='form-area'>
        <Sidebar page={page} setPage={setPage} formError={formError} planError={planError}/>
        <Pages page={page} nextPage={nextPage} prevPage={prevPage} setPage={setPage} formError={formError} planError={planError} setFormError={setFormError} setPlanError={setPlanError} input={input} setInput={setInput}/>
    </div>
    
  )
}

export default Container