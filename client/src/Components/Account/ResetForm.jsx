import { useState } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ResetForm = (props) => {
    const [resetEmail, setResetMail] = useState('')
    const handleSetResetEmail = (e) => {
        setResetMail(e.target.value)
    }
    return ( 
        <>
            <h2>Resetowanie hasła</h2>
            <TextField value={resetEmail} style={{marginBottom: '.5em'}} onChange={handleSetResetEmail} id="outlined-basic" label="Login" variant="outlined" />
            <label onClick={props.goback}><ArrowBackIcon style={{marginRight: '.3em'}}/><span>Wróć do logowania</span></label>
            <Button type='submit' variant="outlined" color="primary">Resetuj hasło</Button>
        </>
     );
}
 
export default ResetForm;