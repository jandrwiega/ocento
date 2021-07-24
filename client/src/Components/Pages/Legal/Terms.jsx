import { Link } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../../../Styles/PagesStyles/Terms.css'

const Terms = () => {
    return ( 
        <div className="terms__wrapper">
            <Link to='/' className="back__btn">
                <ArrowBackIcon /> Powrót
            </Link>
            <h1>Regulamin korzystania z aplikacji</h1>
            <ul>
                <li>Korzystanie z aplikacji jest bezpłatne</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
     );
}
 
export default Terms;