// import { useState } from 'react';
import './Page3.css'

function Page3(props) {

  const {toggleValue, addonArray, setAddonArray, isChecked, setIsChecked} = props;
  const addonList = [
      {
        id: 0,
        item: 'Online service',
        text: 'Access to multiplayer games',
        costMo: '+$1/mo',
        costYr: '+$10/yr'

      },
      {
        id: 1,
        item: 'Larger storage',
        text: 'Extra 1TB of cloud save',
        costMo: '+$2/mo',
        costYr: '+$20/yr'
      },
      {
        id: 2,
        item: 'Customizable Profile',
        text: 'Custom theme on your profile',
        costMo: '+$2/mo',
        costYr: '+$20/yr'
      }
  ]

  // const [isChecked, setIsChecked] = useState([false, false, false])

  function changeAddon(addon, checkStatus, index){
    console.log(addon)
    console.log(checkStatus)
    console.log(index)
    // console.log('this is the current status checked or unchecked')
    // console.log(checkStatus, addon)

    let addonContents;
    
    if(toggleValue){
      addonContents = {
        addonItem: addon.item,
        addonPrice: addon.costYr
      }
    }
    else{
      addonContents = {
        addonItem: addon.item,
        addonPrice: addon.costMo
      }
      
    }

    if(checkStatus){
      setAddonArray((prevState) => [...prevState.filter(singleAddon => singleAddon.addonItem !== addon.item), addonContents])
    }
    else{
    
      const position = (addonArray.findIndex((element) => element.addonItem === addonContents.addonItem))

      console.log('this is addonArray',addonArray)
      console.log('this is addon contents', addonContents)
      console.log('this is posotion', position)

      addonArray.splice(position, 1)
      // const deletedAddonArray = addonArray.splice(position, 1)
      // console.log('this is deleted array', deletedAddonArray)  
      // setAddonArray(deletedAddonArray)
    }
    



    const updatedCheckState = isChecked.map((item, position) => position === index ? !item : item)
    setIsChecked(updatedCheckState)
    console.log(isChecked)
  }





  const addons = addonList.map((addon, index) => {

      return(
        <div className="add-ons" key={addon.id} id={isChecked[index]? "selected" : ""}>
            <div className="addon">
                <input type="checkbox" id="select" checked={isChecked[index]} onChange={(e)=>changeAddon(addon, e.target.checked, index)}/>
                {/* defaultChecked={false} */}
              <div className="addon-content">
                <p id="item">{addon.item}</p>
                <p>{addon.text}</p>
              </div>
            </div>
              <p id="cost">{toggleValue ? addon.costYr : addon.costMo}</p>
        </div>
      )
    

    // if(toggleValue == false){
      // return(
      //   <div className="add-ons" key={addon.id}>
      //       <div className="addon">
      //           <input type="checkbox" id="select"/>
      //         <div className="addon-content">
      //           <p id="item">{addon.item}</p>
      //           <p>{addon.text}</p>
      //         </div>
      //       </div>
      //         <p id="cost">{addon.costMo}</p>
      //   </div>
      // )
    // }
    // else if(toggleValue == true){
    //   return(
    //     <div className="add-ons" key={addon.id}>
    //         <div className="addon">
    //             <input type="checkbox" id="select"/>
    //           <div className="addon-content">
    //             <p id="item">{addon.item}</p>
    //             <p>{addon.text}</p>
    //           </div>
    //         </div>
    //           <p id="cost">{addon.costYr}</p>
    //     </div>
    //   )
    // }

  })



  return (
    <div className="page">
    <div className="form-info">
      <h2>Pick add-ons</h2>
      <p> Add-ons help enhance your gaming experience.</p>
    </div>

    <div className="monthlyAddon">
      <div className="selections">

        {addons}

      </div>  
    </div>
    
  </div>
  )
}

export default Page3