import './Buttons.css'

function Buttons(props){
  console.log(props)

  if(props.pageNo === 1){
    return(
      <div className="buttons">
        <button type="submit" id="next" onClick={() => props.next()}>Next Step</button>   
      </div>
    )
  }
  else if(props.pageNo === 4){
    return(
      <div className="buttons">
        <button id="back" onClick={() => props.prev()}>Go Back</button>
        <button type="submit" id="next" onClick={() => props.next()}>Confirm</button>   
    </div>
    )
  }
  else if(props.pageNo === 5){
    return(
      <div className="buttons">
    
      </div>
    )
  }

  return (
    <div className="buttons">
        <button id="back" onClick={() => {props.prev()}}>Go Back</button>
        <button type="submit" id="next" onClick={() => props.next()}>Next Step</button>   
    </div>
  )
}

export default Buttons