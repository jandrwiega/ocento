import Button from '@material-ui/core/Button';

const RegisterError = (props) => {
    return ( 
        <>
            <h2>Nie udało się zarejstrować </h2>
            <p>Sprawdź czy ten adres E-mail nie jest już zarejstrowany i spróbuj ponownie</p>
            <Button style={{width: 'fit-content'}} variant="outlined" color="secondary" onClick={props.tryagain}>Spróbuj ponownie</Button>
        </>
     );
}
 
export default RegisterError;