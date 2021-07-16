import { Link } from 'react-router-dom'

import '../Styles/StaticComponentStyles/Footer.css';

const Footer = () => {
    return ( 
       <footer>
         <ul>
           <li><p>Pomoc</p></li>
           <li><Link to='/polityka-prywatnosci'>Polityka prywatności</Link></li>
           <li><Link to='/regulamin'>Regulamin aplikacji</Link></li>
         </ul>

         <ul>
           <li><p>Kontakt</p></li>
           <li><a href="mailto:jandrwiega.business@gmail.com">jandrwiega.business@gmail.com</a></li>
         </ul>

         <ul>
           <li><p>Rozwój</p></li>
           <li><Link to='/pomysly'>Masz pomysł jak ulepszyć aplikacje ?</Link></li>
           <li><Link to='/praca'>Chcesz pomóc przy tworzeniu aplikacji ?</Link></li>
         </ul>
       </footer>
     );
}
 
export default Footer;