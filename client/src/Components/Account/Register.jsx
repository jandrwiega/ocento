
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import '../../Styles/AccountStyles/Register.css'
import Zoom from 'react-reveal/Zoom';


const Register = () => {

    const { fetchLink } = useContext(AppContext)

    useEffect(()=> {
        const wrapper = document.querySelector('.wrapper');
        const nav = document.querySelector('nav');
        nav.setAttribute('id', 'registerNavBg')
        wrapper.setAttribute('id', 'registerWrapperBg')
    }, [])

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [acceptTerm, setAcceptTerm] = useState(false)

    const handleSetName = (e) => {
        setName(e.target.value);
    }
    const handleSetSurname = (e) => {
        setSurname(e.target.value)
    }
    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSetConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleToggleAcceptTerm = (e) => {
        setAcceptTerm(e.target.checked)
    }

    const handleSubmitRegisterForm = (e) => {
        e.preventDefault();
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
    }

    return ( 
        <div className="register__wrapper">
            <Zoom>
            <form onSubmit={handleSubmitRegisterForm}>
                <h2>Rejstracja</h2>
                <TextField value={name} onChange={handleSetName} id="outlined-basic" label="Imię" variant="outlined" />
                <TextField value={surname} onChange={handleSetSurname} id="outlined-basic" label="Nazwisko" variant="outlined" />
                <TextField value={email} onChange={handleSetEmail} id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField value={password} onChange={handleSetPassword} id="outlined-basic" label="Hasło" variant="outlined" />
                <TextField value={confirmPassword} onChange={handleSetConfirmPassword} id="outlined-basic" label="Potwierdź hasło" variant="outlined" />
                <label>
                    <Checkbox checked={acceptTerm} onChange={handleToggleAcceptTerm} color="primary"/>
                    Akceptuje warunki korzystania z aplikacji
                </label>

                <Button type='submit' variant="outlined" color="primary">Zarejstruj</Button>
            </form>
            </Zoom>
        </div>
     );
}
 
export default Register;