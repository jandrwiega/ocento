import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Cookies from 'universal-cookie';


import '../../Styles/Static/CookiesInfo.css';

const CookiesInfo = (props) => {
    const handleSetAcceptCookies = () => {
        const cookies = new Cookies()
        cookies.set('cookiesAccepted', true, {
            maxAge: '31556926'
        })
        props.accept();
    }
    return ( 
        <div className="cookiesinfo__wrapper">
            <div className="cookiesinfo__terms">
                <p>Ta witryna korzysta z plików cookies do poprawnego funkcjonowania serwisu oraz do analizy ruchu na stronie.
                  Korzystając z serwisu wyrażasz zgodę na przetwarzanie danych osobowych oraz warunki zawarte w polityce prywatności i cookies.
                </p>
                <label>
                    <Button variant="outlined"><Link to='/polityka-prywatnosci'>Zobacz więcej</Link></Button>
                    <Button variant="outlined" color="secondary" onClick={handleSetAcceptCookies}>przejdź do serwisu</Button>
                </label>
            </div>
        </div>
     );
}
 
export default CookiesInfo;