import logo from './logo.svg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Routes, Route, useNavigate} from 'react-router-dom';
function Login() {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState("")
  const [validationStates, setValidationState] = useState({ emailState: false, passwordState: false })
  const [titleValue, setTitleValue] = useState("Acceder")
  const [showTitle2, setShowTitle2] = useState(true)
  const [phase, setPhase] = useState(1)
  const [type, setType] = useState("email")
  const [placeholder, setPlaceholder] = useState("Correo electrónico")
  const [className, setClassName] = useState(`form-control ${!validationStates.emailState ? 'is-invalid' : ''}`)
  const [otherClassName, setOtherClassName] = useState(`mb-6 ${!validationStates.emailState ? 'has-danger' : ''}`)
  
  const navigateToList = () => {
    navigate("/parts");
  };
  
  const handleChange = ((e) => {

    if (phase === 1){
      setFormValues(e.target.value);
      validateEmail(e);
    }

    if (phase === 2){
      setFormValues(e.target.value);
      validatePassword(e);
    }
  });

  const validatePassword = (e) => {
    const password = e.target.value;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const isLongEnough = password.length >= 9;

    if (hasLetters && hasNumbers && isLongEnough) {
      setValidationState({ ...validationStates, passwordState: true });
    }

    else {
      setValidationState({ ...validationStates, passwordState: false });
    }
  };

  const validateEmail = (e) => {
    const email = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(emailPattern.test(email)){
      setValidationState({ ...validationStates, emailState: true });
    }

    else {
      setValidationState({ ...validationStates, emailState: false });
    }
  };


  const clickSubmit = (() => {

    if (phase === 1 && validationStates.emailState){
      setTitleValue(formValues.email);
      setShowTitle2(false);
      setPhase(2);
      setFormValues("");
      setType("password");
      setPlaceholder("Ingresa tu contraseña.");
      setClassName(`form-control ${!validationStates.passwordState ? 'is-invalid' : ''}`)
      setOtherClassName(`mb-6 ${!validationStates.passwordState ? 'has-danger' : ''}`)
    }

    if (phase === 2 && validationStates.passwordState){
      navigateToList();
    }

  });

  return (
    <div>
      <h1>{titleValue}</h1>
      {showTitle2 && <h2>Usa tu Cuenta de UniAlpes</h2>}
      <Form>
        <Form.Group className={otherClassName} controlId="formBasicEmail">
          <Form.Control
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={formValues}
            className={className}
          />
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Siguiente
        </Button>
      </Form>
    </div>
  );
}
export default Login;
