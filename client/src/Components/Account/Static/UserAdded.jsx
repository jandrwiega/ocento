import { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const UserAdded = () => {
    const [redirect, setRedirect] = useState(false)
    return ( 
        <>
            {redirect ? <Redirect push to='/logowanie' /> : null}
            <h2>Potwierdź adres E-mail</h2>
            <p>Na twoją skrzynkę mailową wysłaliśmy link do potwierdzenia aresu E-mail, dopiero wtedy twoje konto będzie aktywne</p>
            <Button variant="outlined" color="primary" onClick={() => setRedirect(true)}>Przejdź do logowania</Button>
        </>
     );
}
 
export default UserAdded;