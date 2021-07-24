import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ResetForm = (props) => {
    const [submitReset, setSubmitReset] = useState(false)
    return ( 
        <>
            {submitReset ? <>
            <h2>Wysłaliśmy link do zresetowania hasła</h2>
            <p>Na twoją skrzynkę mailową wysłaliśmy link do zresetowania hasła. Kliknij w niego a przeniesiemy cię na stronę do ustalenia nowego hasła</p>
            <Button variant="outlined" color="primary" onClick={props.goback}>Przejdź do logowania</Button>
            </> : <>
            <h2>Resetowanie hasła</h2>
            <TextField value={props.remail} style={{marginBottom: '.5em'}} onChange={props.setreset} id="outlined-basic" label="Login" variant="outlined" />
            <label onClick={props.goback}><ArrowBackIcon style={{marginRight: '.3em'}}/><span>Wróć do logowania</span></label>
            <Button onClick={() => setSubmitReset(true)} type='submit' variant="outlined" color="primary">Resetuj hasło</Button>
            </>}
        </>
     );
}
 
export default ResetForm;