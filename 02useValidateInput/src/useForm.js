import {useState, useEffect} from 'react'
export default function useForm(callback) {
  const [data , setData] = useState({});
  const [errors, setErrors] = useState({})
  const [isSubmitted , setIsSubmitted ] = useState(false);

    //When there is no error call  callback function
    useEffect(() => {
      if (isSubmitted && Object.keys(errors).length === 0) {
        callback();
      }
    }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(data));
    setIsSubmitted(true);
  }


  const handleChange = (event) => {
    event.persist();
    setData(data => ({...data, [event.target.name]: event.target.value }))    
  }

  return {
    handleChange,
    handleSubmit,
    data,
    errors,
  }
}

const validate = (formdata) => {
  let errors = {};
  // Setting email error message
  if(!formdata.email) {
    errors.email = "Email id is required";
  } else if (!/^[a-zA-Z0-9+-._]+@[a-zA-Z0-9.-]+$/.test(formdata.email)) {
    errors.email = 'Email address is invalid'
  }
  // Setting password error message
  if(!formdata.password) {
    errors.password = "Password is required";
  } else if(formdata.password.length < 8) {
    errors.password = "Password must be atleast 8 or more character";
  } else if(!/^[a-zA-Z0-9]+$/.test(formdata.password)) {
    errors.password = "Password must not contain any special characters";
  }
  return errors;
}
