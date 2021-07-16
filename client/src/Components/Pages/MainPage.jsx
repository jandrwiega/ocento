import { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/AppContext';

const MainPage = () => {
    const { isUserLogged } = useContext(AppContext)
    useEffect(()=> {
        const wrapper = document.querySelector('.wrapper');
        const nav = document.querySelector('nav');
        nav.removeAttribute('id')
        wrapper.removeAttribute('id')
    }, [])
    return ( 
        <>
        strona glowna, natomiast uzytkownik jest {isUserLogged ? 'zalogowany' : 'niezalogowany'}
        </>
     );
}
 
export default MainPage;