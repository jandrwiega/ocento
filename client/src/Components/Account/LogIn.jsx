import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom'
//import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//import { GoogleLogin } from 'react-google-login';

import ResetForm from './ResetForm';
import Loading from '../Static/Loading'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
//import facebookIcon from '../../Data/facebook.svg';
//import googleIcon from '../../Data/google.svg';

import '../../Styles/AccountStyles/LogIn.css'
import Zoom from 'react-reveal/Zoom';

const LogIn = () => {
    const { fetchLink, setIsUserLogged, setLoginData } = useContext(AppContext)

    /*const responseFacebook = (response) => {
        console.log(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
      }*/
    const [redirect, setRedirect] = useState(false)

    useEffect(()=> {
        const wrapper = document.querySelector('.wrapper');
        const nav = document.querySelector('nav');
        nav.setAttribute('id', 'loginNavBg')
        wrapper.setAttribute('id', 'loginWrapperBg')
    }, [])

    //const { isUserLogged, setIsUserLogged } = useContext(AppContext);

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [keepLogged, setKeepLogged] = useState(true);
    const [loginPending, setLoginPending] = useState(false)
    const [isLoginError, setIsLoginError] = useState(false)

    const handleSetLogin = (e) => {
        setLogin(e.target.value)
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    } 
    const handleSetKeepLogged = (e) => {
        setKeepLogged(e.target.checked)
    }
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        setLoginPending(true)
        const loginObject = {
            login, password, keepLogged
        }
        fetch(fetchLink+'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginObject)
        })
        .then(response => response.json())
        .then(data => setLogData(data))
    }

    const setLogData = (data) => {
        const cookies = new Cookies()
        if(data.loginError === 'error') {
            setIsLoginError(true)
        }   else {
        setIsUserLogged(data.isLogged)
        setLoginData(data.loginData)
        if(data.keepLogged) {
            cookies.set('isLogged', data.isLogged, {
                maxAge: '31556926'
            })
            cookies.set('userData', data.loginData, {
                maxAge: '31556926'
            })
        }   else {
            cookies.set('isLogged', data.isLogged)
            cookies.set('userData', data.loginData)
        }
        if(data.isLogged) {
            setRedirect(true)
        }   else {

        }}
        setLoginPending(false)
    }

    const [isPasswordRecovery, setIsPasswordRecovery] = useState(false)
    const handleSetIsPasswordRecovery = () => {
        setIsPasswordRecovery(!isPasswordRecovery)
    }

    const [resetEmail, setResetMail] = useState('')
    const handleSetResetEmail = (e) => {
        setResetMail(e.target.value)
    }

    const [submitReset, setSubmitReset] = useState(false)
    const handleSetIsSubmit = () => {
        setSubmitReset(true)
    }
    const handleResetPassword = (e, email) => {
        e.preventDefault();
        handleSetIsSubmit()
        const rData = {
            resetEmail
        }
        fetch(fetchLink+'resetpassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(rData)
        })
    }

    const handleTryLoginAgain = () => {
        setLoginPending(false)
        setIsLoginError(false)
    }

    return ( 
        <div className="login__wrapper">
            <Zoom>
            <form onSubmit={isPasswordRecovery ? handleResetPassword : handleSubmitLogin}>
            {isLoginError ? <ErrorLogin tryagain={handleTryLoginAgain}/> : <>
            {loginPending ? <Loading /> : <>
            {redirect ? <Redirect push to='/' /> : null }
                {isPasswordRecovery ? <ResetForm isSubmit={submitReset} remail={resetEmail} setreset={handleSetResetEmail} goback={handleSetIsPasswordRecovery}/>  : <> 
                <h2>Logowanie</h2>
                <TextField value={login} onChange={handleSetLogin} id="outlined-basic" label="Login" variant="outlined" />
                <TextField type='password' value={password} onChange={handleSetPassword} id="outlined-basic" label="Password" variant="outlined" />
                <label>
                    <Checkbox checked={keepLogged} onChange={handleSetKeepLogged} color="primary"/>
                    Nie wylogowywuj mnie
                </label>
                <Button type='submit' variant="outlined" color="primary">Zaloguj się</Button>
                <span onClick={handleSetIsPasswordRecovery}>Zapomniałeś hasła?</span>

               {/* <div className="loginwithsocialmedia">
                    <span>Zaloguj się przez</span>
                    <div className="socialicon">
                        <FacebookLogin appId="135339998730013" callback={responseFacebook}
                            render={renderProps => ( <img src={facebookIcon} onClick={renderProps.onClick} alt="" /> )} />
                    </div>
                    <div className="socialicon">
                        <GoogleLogin
                            clientId="1234567890-abc123def456.apps.googleusercontent.com"
                            render={renderProps => ( <img src={googleIcon} onClick={renderProps.onClick} alt="" />) } onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
                    </div>
                </div>*/}</>}</>}</> }
            </form> 
            </Zoom>
        </div>
     );
}
 
export default LogIn;

const ErrorLogin = (props) => {
    return ( 
        <>
            <h2>Nie udało się zalogować</h2>
            <p>Coś poszło nie tak upewnij się że wprowadzasz poprawne dane logowania lub zresetuj hasło</p>
            <Button variant="outlined" color="primary" onClick={props.tryagain}>Spróbuj ponownie</Button>
        </>
     );
}