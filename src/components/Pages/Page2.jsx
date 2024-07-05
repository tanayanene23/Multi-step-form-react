import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

import './Page2.css'

import Toggle from '../Toggle/Toggle'

// import { useState } from 'react'

import { useCallback, useMemo } from 'react'




function Page2(props) {

  const {toggleValue, handleToggle, planArray, setPlanArray, setAddonArray, planError, setPlanError} = props;
  

  
 
  const plans = useMemo(() => [
      {
        id: 0,
        image: arcade,
        item: 'Arcade',
        costMo: '$9/mo',
        costYr: '$90/yr',
      },
      {
        id: 1,
        image: advanced,
        item: 'Advanced',
        costMo: '$12/mo',
        costYr: '$120/yr',
      },
      {
        id: 2,
        image: pro,
        item: 'Pro',
        costMo: '$15/mo',
        costYr: '$150/yr',
      }
  ],[])



  const selectPlan = useCallback((plan) => {

    setPlanError(false)
    console.log(planError)

    setAddonArray([])

    if(toggleValue == true){
      setPlanArray({
        planId: plan.id,
        planName: plan.item,
        planCost: plan.costYr
      })    
    }
    else if(toggleValue == false){
      setPlanArray({
        planId: plan.id,
        planName: plan.item,
        planCost: plan.costMo
      })    
    }

    // setAddonArray({})
    console.log(setAddonArray)

    console.log(planArray.planName)   


    // let arrayOfPlans = [];
    // arrayOfPlans = [];
    // let selectedPlan;

    // if(toggleValue == true){
    //   selectedPlan = {
    //     planName: plan.item,
    //     planCost : plan.costYr
    //   }
    // }
    // else if(toggleValue == false){
    //   selectedPlan = {
    //     planName: plan.item,
    //     planCost : plan.costMo
    //   }
    // }

    // arrayOfPlans.push(selectedPlan)
    // console.log(arrayOfPlans)
    // console.log(plan)
  },[planArray.planName, setPlanArray, toggleValue, setPlanError, planError, setAddonArray])

  console.log(plans)



  // function selectPlan(plan){

  //   if(toggleValue == true){
  //     setPlanArray({
  //       planId: plan.id,
  //       planName: plan.item,
  //       planCost: plan.costYr
  //     })    
  //   }
  //   else if(toggleValue == false){
  //     setPlanArray({
  //       planId: plan.id,
  //       planName: plan.item,
  //       planCost: plan.costMo
  //     })    
  //   }

  //   console.log(planArray.planName)
   


  //   // let arrayOfPlans = [];
  //   // arrayOfPlans = [];
  //   // let selectedPlan;

  //   // if(toggleValue == true){
  //   //   selectedPlan = {
  //   //     planName: plan.item,
  //   //     planCost : plan.costYr
  //   //   }
  //   // }
  //   // else if(toggleValue == false){
  //   //   selectedPlan = {
  //   //     planName: plan.item,
  //   //     planCost : plan.costMo
  //   //   }
  //   // }

  //   // arrayOfPlans.push(selectedPlan)
  //   // console.log(arrayOfPlans)
  //   // console.log(plan)
  // }



  const monthlyPlan = useMemo(() => plans.map((plan) => {
    return(
      <div className={(!toggleValue && plan.costMo === planArray.planCost) || (toggleValue && plan.costYr === planArray.planCost) ? "isActive plan-type" : "plan-type"} key={plan.id} onClick={() => selectPlan(plan)}>
          <img src={plan.image} alt={plan.item}/>
          <p id="item">{plan.item}</p>
          <p id="cost">{toggleValue ? plan.costYr : plan.costMo}</p>
          {toggleValue && <p>2 months free</p>}
      </div>
    )
  }), [plans, toggleValue, selectPlan, planArray.planCost])





  // const monthlyPlan = plans.map((plan) => {

  //   return(
  //     // <div className={plan.id === planArray.planId ? "active plan-type" : "plan-type"} key={plan.id} onClick={() => selectPlan(plan)}>
  //     //     <img src={plan.image} alt={plan.item}/>
  //     //     <p id="item">{plan.item}</p>
  //     //     <p id="cost">{toggleValue ? plan.costYr : plan.costMo}</p>
  //     //     {toggleValue && <p>2 months free</p>}
  //     // </div>
  //     <div className={plan.id === planArray.planId ? "active plan-type" : "plan-type"} key={plan.id} onClick={() => selectPlan(plan)}>
  //         <img src={plan.image} alt={plan.item}/>
  //         <p id="item">{plan.item}</p>
  //         <p id="cost">{toggleValue ? plan.costYr : plan.costMo}</p>
  //         {toggleValue && <p>2 months free</p>}
  //     </div>
  //   )



  //   // if(toggleValue == false){
  //   //   return(
  //   //     <div className={plan.costMo === planArray.planCost ? "active plan-type" : "plan-type"} key={plan.id} onClick={() => selectPlan(plan)} >
  //   //         <img src={plan.image} alt={plan.item}/>
  //   //         <p id="item">{plan.item}</p>
  //   //         <p id="cost">{plan.costMo}</p>
  //   //     </div>
  //   //   )
  //   // }
  //   // else if(toggleValue == true){
  //   //   return(
  //   //     <div className={plan.costYr === planArray.planCost ? "active plan-type" : "plan-type"} key={plan.id} onClick={() => selectPlan(plan)}>
  //   //         <img src={plan.image} alt={plan.item}/>
  //   //         <p id="item">{plan.item}</p>
  //   //         <p id="cost">{plan.costYr}</p>
  //   //         <p>2 months free</p>
  //   //     </div>
  //   //   )
  //   // }

  // })


  return (
    <div className="page">
            
    <div className="form-info">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
    </div>

    <div className="monthlyPlan">
      <div className="plan">

        {monthlyPlan}


      </div>
    </div>

      <Toggle handleToggle={handleToggle}  toggleValue={toggleValue}/>

      </div> 
  )
}

export default Page2