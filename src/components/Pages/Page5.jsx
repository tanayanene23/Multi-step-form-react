import './Page5.css'
import thankyou from '../../assets/images/icon-thank-you.svg'

function Page5() {
  return (
    <div className="page">
        <div className="step-5">
        <img src={thankyou} alt="thank-you"/>
        <h2>Thank you!</h2>

        <p>Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.</p>  
        </div>
    </div>
  )
}

export default Page5