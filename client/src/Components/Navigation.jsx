import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useContext, useRef } from 'react'
import { AppContext } from '../Context/AppContext'

import logo from '../Data/logo.png'
import CloseIcon from '@material-ui/icons/Close';

import '../Styles/StaticComponentStyles/Navigation.css'

const Navigation = () => {
    const { isUserLogged } = useContext(AppContext)

    const toggleTopButton = useRef();
    const toggleBottomButton = useRef();
    const mobileMenuRef = useRef();

    const showMobileMenuToggleButtonRef = () => {
        showMobileMenu();
        if(toggleTopButton.current.getAttribute('id') === 'topToggleActive') {
            toggleTopButton.current.removeAttribute('id')
            toggleBottomButton.current.removeAttribute('id')
        }   else {
                toggleTopButton.current.setAttribute('id', 'topToggleActive')
                toggleBottomButton.current.setAttribute('id', 'bottomToggleActive')
        }
    }

    const showMobileMenu = () => {
        if(mobileMenuRef.current.getAttribute('id') === 'mobileMenuIsActive') {
            mobileMenuRef.current.removeAttribute('id')
        }   else {
            mobileMenuRef.current.setAttribute('id', 'mobileMenuIsActive')
        }
    }

    return ( 
        <nav>
            <Link to='/'><img src={logo} alt="logo ocenmyto.pl" /></Link>
            {isUserLogged ? null : 
                <aside>
                    <Link to='/logowanie'><Button variant="outlined" color="primary">Logowanie</Button></Link>
                    <Link to='/rejstracja'><Button variant="outlined" color="primary">Rejstracja</Button></Link>
                </aside>
            }
            <div className="mobileMenuToggle" onClick={showMobileMenuToggleButtonRef}>
                <div ref={toggleTopButton}></div>
                <div ref={toggleBottomButton}></div>
            </div>
            <div className="mobileMenu" ref={mobileMenuRef}>
                <div className="closemobileMenu" onClick={showMobileMenuToggleButtonRef}>
                    <CloseIcon /> Zamknij menu
                </div>
                {isUserLogged ? null : <> 
                    <Link to='/logowanie' onClick={showMobileMenuToggleButtonRef}><Button variant="outlined" color="secondary">Logowanie</Button></Link>
                    <Link to='/rejstracja' onClick={showMobileMenuToggleButtonRef}><Button variant="outlined" color="secondary">Rejstracja</Button></Link>
                </>}
            </div>
        </nav>
     );
}
 
export default Navigation;