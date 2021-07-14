import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

const MainPage = () => {
    const { userLogged } = useContext(AppContext)
    return ( 
        <>
        strona glowna, natomiast uzytkownik jest {userLogged ? 'zalogowany' : 'niezalogowany'}
        </>
     );
}
 
export default MainPage;