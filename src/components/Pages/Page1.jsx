import './Page1.css'


function Page1(props) {

  // const {input,setInput, formError, setFormError} = props
  const {input, setInput, setFormError} = props

  const formFields = [
    {
      id: 0,
      label: 'Name',
      type: 'text',
      placeholder: 'e.g. Stephen King',
      nameString: /^[a-zA-Z]+( [a-zA-Z]+)?$/,
      errorMsg: "Enter your full name",
      valid: false
    },
    {
      id: 1,
      label: 'Email',
      type: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
      emailString: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      errorMsg: "Enter your correct email address",
      valid: false
    },
    {
      id: 2,
      label: 'Number',
      type: 'tel',
      placeholder: 'e.g. +1 234 567 890' ,
      numberString: /^\d{10}$/,
      errorMsg: "Enter your correct 10 digit number",
      valid: false
    }
  ]


  // const nameString = /^[a-zA-Z]+( [a-zA-Z]+)?$/;
  // const emailString =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  // const numberString = /^\d{10}$/;

  const nameMatch = formFields[0].nameString.test(input.Name)
  const emailMatch = formFields[1].emailString.test(input.Email)
  const numberMatch = formFields[2].numberString.test(input.Number)

  if(nameMatch===false || emailMatch===false || numberMatch===false){
    setFormError(true)
  }
  else if(nameMatch && emailMatch && numberMatch){
    setFormError(false)
  }


  function checkFields(){
    if(nameMatch){
      formFields[0].valid = false
    }
    else{
      formFields[0].valid = true
    }
  
    if(emailMatch){
      formFields[1].valid = false
    }
    else{
      formFields[1].valid = true
    }
  
    if(numberMatch){
      formFields[2].valid = false 
    }
    else{
      formFields[2].valid = true
    }
  }

  checkFields()


  function saveInput(e){
      setInput((prevState) => ({...prevState, [e.target.name]: e.target.value}))
      console.log(input)
    }
    console.log(input)


  const forms = formFields.map((field) => {
      return(
        <div className='form-fields' key={field.id}>
  
          <div className="label-and-error">
            <label htmlFor={field.label}>{field.label}</label>

            {field.valid && <p className="error-message"> {field.errorMsg} </p>}

          </div>
          <input type={field.type} name={field.label} id="input" placeholder={field.placeholder} required  
          onChange={saveInput}  value={input[field.label]}/>
  
          </div>
      )
    })

  return (
    <div className="page">

        <div className="form-info">
        <h2>Personal info</h2>
        <p> Please provide your name, email address, and phone number.</p>
        </div>


        <form action="">

        {forms}

        </form>

    </div>
  )
}

export default Page1