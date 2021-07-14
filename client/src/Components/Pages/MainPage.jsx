import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

const MainPage = () => {
    const { isUserLogged } = useContext(AppContext)
    return ( 
        <>
        strona glowna, natomiast uzytkownik jest {isUserLogged ? 'zalogowany' : 'niezalogowany'}
        </>
     );
}
 
export default MainPage;