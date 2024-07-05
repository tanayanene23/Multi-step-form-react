
function Toggle(props) {

  const {handleToggle, toggleValue} = props;
  
  console.log(toggleValue)

  let circle;

  if(toggleValue == true){
    circle = <div className="active toggle">
                <div className="circle">
                </div>
              </div>
  }
  else if(toggleValue == false){
    circle = <div className="toggle">
                <div className="circle">
                </div>
              </div>
  }

  

  return (
    <div className="toggle-options">
    <p>Monthly</p>

      <div className="toggle-container" onClick={handleToggle}>

        {circle}
        {/* <div className="active toggle">
            <div className="circle">
            </div>
        </div> */}


      </div>

    <p>Yearly</p>
    </div>
  )
}

export default Toggle