import './Sidebar.css'
// import sidebar from '../assets/images/bg-sidebar-desktop.svg'
import sidebar from '../../assets/images/bg-sidebar-desktop.svg'



function Sidebar(props) {

  const {page, setPage, formError, planError} = props;
  console.log(page)

  const stepsInfo = [
    {
        id: 1,
        stepNo: 'Step 1',
        text: 'Your info'
    },
    {
      id: 2,
      stepNo: 'Step 2',
      text: 'Select plan'
    },
    {
      id: 3,
      stepNo: 'Step 3',
      text: 'Add-ons'
    },
    {
      id: 4,
      stepNo: 'Step 4',
      text: 'Summary'
    }
  ]

  function changePage(stepId){
    if(page==1 && formError===true){
      setPage(1)
      alert("Enter details")
    }
    else if(page==2 && planError===true){
      setPage(2)
      alert("Select a plan")
    }
    else{
      setPage(stepId)
    }
  }
  
  
  const sidebarContents = stepsInfo.map((step) => {
    return(
      <div className={step.id === page ? "active step" : "step"} id={step.id} key={step.id}>
        <h4 className="to-highlight" onClick={() => changePage(step.id)}>{step.id}</h4>
        <div className="content">
          <p>{step.stepNo}</p>
          <h5>{step.text}</h5>
        </div>
      </div>
    )
  })

  return (
    <div className='sidebar'>

      <div className="sidebar-image">
            <img src={sidebar} alt="sidebar" />
      </div>

      <div className="sidebar-content">

        {sidebarContents}

      </div>

    </div>
  )
}

export default Sidebar