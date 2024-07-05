import './Page4.css'

function Page4(props) {

  const {planArray, toggleValue, setPage, addonArray} = props;
  console.log(planArray)

  function changePage(){
    setPage(2)
  }

  const addonDetails = addonArray.map((addon) => {
    return(
      <div className="final-details" key={addon.addonItem}>
        <p>{addon.addonItem}</p>
        <p id='addon-price'>{addon.addonPrice}</p>
      </div>
    )
  })

  let arrayOfPrices = [];
  arrayOfPrices.push(planArray.planCost);
  addonArray.forEach(addon => {
    arrayOfPrices.push(addon.addonPrice)
  });
  
  console.log(arrayOfPrices)

  let total = 0;
  arrayOfPrices.forEach(price => {
      let matches = price.match(/(\d+)/);
      if (matches) {
          total += Number(matches[0]);
      }
  });
  console.log('this is total', total)


  return (
    <div className="page">
    <div className="step-4">
      <div className="form-info">
        <h2> Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>

      <div className="view-details">
        <div className="final-details">
          <p>{planArray.planName}{toggleValue ? "(Yearly)" : "(Monthly)"}</p>
          <p>{planArray.planCost}</p>
        </div>
        <p id="changePlan" onClick={changePage}>Change</p>
        <hr />

        {addonDetails}

      </div>

    <div className="total">
      <p>Total{toggleValue ? "(per year)" : "(per month)"}</p>
      <p>+${total}/{toggleValue? "yr" : "mo"}</p>
    </div>
  
    </div>
  </div>
  )
}

export default Page4