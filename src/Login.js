import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
function Login(props) {

  const intl = useIntl();
  const mail_placeholder = intl.formatMessage({ id: "L-email-placeholder" });
  const password_placeholder = intl.formatMessage({id : "L-password-placeholder"})
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: ""})
  const [validationStates, setValidationState] = useState({ emailState: false, passwordState: false })
  const [titleValue, setTitleValue] = useState("")
  const [showTitle2, setShowTitle2] = useState(true)
  const [phase, setPhase] = useState(1)

   const navigateToList = () => {
    navigate("/parts");
   };
  
  const handleEmailChange = ((e) => {
    setFormValues({ ...formValues, email: e.target.value })
    validateEmail(e)
  });

  const handlePasswordChange = ((e) => {
    setFormValues({ ...formValues, password: e.target.value })
    validatePassword(e)
  });

  const validatePassword = (e) => {
    const password = e.target.value;
    const isLongEnough = password.length >= 6;

    if (isLongEnough) {
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


  const clickSubmit1 = (() => {

    if (validationStates.emailState){
      setTitleValue(formValues.email);
      setShowTitle2(false);
      setPhase(2);
    }
  })

  const clickSubmit2 = (() => {

    if (validationStates.passwordState){
      const random = Math.random();
      props.setRole((random < 0.5) ? true : false)
      navigateToList();
    }

  });

  return (
    <div>
      {phase === 1 && <h1><FormattedMessage id = "L-title"></FormattedMessage></h1>}
      {phase === 1 && <h1>{titleValue}</h1>}
      {showTitle2 && <h2><FormattedMessage id = "L-title2"></FormattedMessage></h2>}
      {phase === 1 && <Form>
        <LanguageSelector userLocale = {props.userLocale} setUserLocale = {props.setUserLocale}/>
        <Form.Group className={`mb-6 ${!validationStates.emailState ? 'has-danger' : ''}`} controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder={mail_placeholder}
            onChange={handleEmailChange}
            value={formValues.email}
            className={`form-control ${!validationStates.emailState ? 'is-invalid' : ''}`}
          />
        </Form.Group>
        <Link><FormattedMessage id = "L-forget"></FormattedMessage></Link>
        <div className="d-flex align-items-center">
        <Link><FormattedMessage id = "L-create"/></Link>
        <Button variant="primary" onClick={clickSubmit1}>
          <FormattedMessage id = "L-button"></FormattedMessage>
        </Button>
        </div>
      </Form>}
      {phase === 2 && <Form>
        <Form.Group className={`mb-6 ${!validationStates.passwordState ? 'has-danger' : ''}`} controlId="formBasicEmail">
          <Form.Control
            type="password"
            placeholder={password_placeholder}
            onChange={handlePasswordChange}
            value={formValues.password}
            className={`form-control ${!validationStates.passwordState ? 'is-invalid' : ''}`}
          />
        </Form.Group>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault">
          <FormattedMessage id = "L-show-password"/>
        </label>
      </div>
        <Button variant="primary" onClick={clickSubmit2}>
          <FormattedMessage id = "L-button"></FormattedMessage>
        </Button>
      </Form>}
    </div>
  );
}
export default Login;
