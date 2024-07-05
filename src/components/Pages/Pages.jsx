import './Pages.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Buttons from '../Buttons/Buttons'

import { useState } from 'react'

function Pages(props) {

  const {page, nextPage, prevPage, setPage, formError, planError, setFormError, setPlanError, input, setInput} = props;

  // const[page, setPage] = useState(1)

  // const nextPage = () => {
  //   setPage(page => page + 1)
  // }

  // const prevPage =() => {
  //   setPage(page => page - 1)
  // }


  // state for toggle button
  const [toggleValue, setToggleValue] = useState(false)

  // state for saving form data
  // const [input, setInput] = useState({
  //   Name: "",
  //   Email: "",
  //   Number: ""
  // })


  


  // state for saving selected plan
  const [planArray, setPlanArray] = useState({})
  // console.log(planArray)



  // state for saving selected addons 
  const [addonArray, setAddonArray] = useState([])


  // state for saving the state of each checkbox separately
  const [isChecked, setIsChecked] = useState([false, false, false])




  // function to handle toggle
  function handleToggle(){
    setToggleValue(!toggleValue)
    setPlanArray({})
    setAddonArray([])
    setIsChecked([false, false, false])
    setPlanError(true)
    // console.log(ToggleValue)
  }


  return (
    <div className='pages'>

      {page===1 && <Page1 input={input} setInput={setInput} formError={formError} setFormError={setFormError}/>}
      {page===2 && <Page2 toggleValue={toggleValue} handleToggle={handleToggle} planArray={planArray} setPlanArray={setPlanArray} setAddonArray={setAddonArray} setIsChecked={setIsChecked} planError={planError} setPlanError={setPlanError}/>}
      {page===3 && <Page3 toggleValue={toggleValue} addonArray={addonArray} setAddonArray={setAddonArray}  isChecked={isChecked} setIsChecked={setIsChecked}/>}
      {page===4 && <Page4 planArray={planArray} toggleValue={toggleValue} setPage={setPage} addonArray={addonArray}/>}
      {page===5 && <Page5/>}


      {/* <Page1/> */}

      {/* <Page2/> */}

      {/* <Page3/> */}

      {/* <Page4/> */}

      {/* <Page5/> */}

      {/* <Buttons name='helloTanaya' next={nextPage} prev={prevPage}/> */}

      <Buttons next={nextPage} prev={prevPage} pageNo={page}/>

    </div>  
  )
}

export default Pages