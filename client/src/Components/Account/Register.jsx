import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import '../../Styles/AccountStyles/Register.css'
import Zoom from 'react-reveal/Zoom';

import UserAdded from './Static/UserAdded'
import Loading from '../Static/Loading'
import RegisterError from './Static/RegisterError'

const Register = () => {

    const { fetchLink } = useContext(AppContext)

    useEffect(()=> {
        const wrapper = document.querySelector('.wrapper');
        const nav = document.querySelector('nav');
        nav.setAttribute('id', 'registerNavBg')
        wrapper.setAttribute('id', 'registerWrapperBg')
    }, [])

    const [validationEnable, setValidationEnable] = useState(false)
    const [registerResponse, setRegisterResponse] = useState('')

    const handleTryAgain = (e) => {
        setRegisterResponse('')
    }

    const [name, setName] = useState('')
    const [nameAccepted, setNameAccepted] = useState(false)
    const [surname, setSurname] = useState('')
    const [surnameAccepted, setSurnameAccepted] = useState(false)
    const [email, setEmail] = useState('')
    const [emailAccepted, setEmailAccepted] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordAccepted, setPasswordAccepted] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [acceptTerm, setAcceptTerm] = useState(false)

    const handleSetName = (e) => {
        const value = e.target.value;
        setName(value);
        const reg = /^([a-zA-Z]){3,40}$/
        if(reg.test(value)) {
            setNameAccepted(true)
        }   else {
            setNameAccepted(false)
        }
    }
    const handleSetSurname = (e) => {
        const value = e.target.value;
        setSurname(value)
        const reg = /^([a-zA-Z- ]){3,40}$/
        if(reg.test(value)) {
            setSurnameAccepted(true)
        }   else {
            setSurnameAccepted(false)
        }
    }
    const handleSetEmail = (e) => {
        const value = e.target.value;
        setEmail(value)
        // eslint-disable-next-line
        const reg = /(^[-\w\.]+@([-\w\.]+)+[a-z]+$)/
        if(reg.test(value)) {
            setEmailAccepted(true)
        }   else {
            setEmailAccepted(false)
        }
    }
    const handleSetPassword = (e) => {
        const value = e.target.value;
        setPassword(value)
        if(value === confirmPassword && value.length >= 6) {
            setPasswordAccepted(true)
        }   else {
            setPasswordAccepted(false)
        }
    }
    const handleSetConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPassword(value)
        if(value === password && value.length >= 6) {
            setPasswordAccepted(true)
        }   else {
            setPasswordAccepted(false)
        }
    }
    const handleToggleAcceptTerm = (e) => {
        const checked = e.target.checked;
        setAcceptTerm(checked)
    }

    const [regPending, setRegPending] = useState(false)

    const handleSubmitRegisterForm = (e) => {
        e.preventDefault();
        setRegPending(true)
        if(nameAccepted && surnameAccepted && emailAccepted && passwordAccepted && acceptTerm) {
        const registerObject = {
            name, surname, email, password
        }
        fetch(fetchLink+'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerObject)
        })
        .then(response => response.json())
        .then(data => setRegisterResponse(data.registerResponse))  
        }   else {
            setValidationEnable(true)
        }
        setRegPending(false)
    }

    return ( 
        <div className="register__wrapper">
            <Zoom>
            <form onSubmit={handleSubmitRegisterForm}>
            {registerResponse === '' && !regPending ?  <>
                <h2>Rejstracja</h2>
                <TextField value={name} onChange={handleSetName} id="outlined-basic" label="Imię" variant="outlined" />
                { validationEnable ? nameAccepted ? <span></span> : <span>To pole musi zawierać od 3 do 40 znaków</span> : <span></span> }
                <TextField value={surname} onChange={handleSetSurname} id="outlined-basic" label="Nazwisko" variant="outlined" />
                { validationEnable ? surnameAccepted ? <span></span> : <span>To pole musi zawierać od 3 do 40 znaków</span> : <span></span> }
                <TextField value={email} onChange={handleSetEmail} id="outlined-basic" label="E-mail" variant="outlined" />
                { validationEnable ? emailAccepted ? <span></span> : <span>To pole musi mieć formę E-mail</span> : <span></span> }
                <TextField value={password} onChange={handleSetPassword} id="outlined-basic" label="Hasło" variant="outlined" type='password'/>
                { validationEnable ? passwordAccepted ? <span></span> : <span>Hasła musi mieć więcej niż 5 znaków i być takie same jak w polu sprawdzającym</span> : <span></span> }
                <TextField value={confirmPassword} onChange={handleSetConfirmPassword} id="outlined-basic" label="Potwierdź hasło" variant="outlined" type='password'/>
                { validationEnable ? passwordAccepted ? <span></span> : <span>Hasła musi mieć więcej niż 5 znaków i być takie same jak w polu sprawdzającym</span> : <span></span> }
                <label>
                    <Checkbox checked={acceptTerm} onChange={handleToggleAcceptTerm} color="primary" required/>
                    Akceptuje warunki korzystania z aplikacji
                </label>

                <Button type='submit' variant="outlined" color="primary">Zarejstruj</Button>
                </>  : null}
                {registerResponse === '' && regPending ? <Loading /> : null}
                {registerResponse === 'added' ? <UserAdded /> : null }
                {registerResponse === 'error' ? <RegisterError tryagain={handleTryAgain}/> : null }
            </form> 
            </Zoom>
        </div>
     );
}
 
export default Register;