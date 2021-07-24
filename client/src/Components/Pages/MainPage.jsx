import { useEffect } from 'react';
//import { Switch, Route } from 'react-router-dom';
//import { AppContext } from '../../Context/AppContext';

import '../../Styles/PagesStyles/Main.css'

const MainPage = () => {
   // const { isUserLogged } = useContext(AppContext)
    useEffect(()=> {
        const wrapper = document.querySelector('.wrapper');
        const nav = document.querySelector('nav');
        if(nav != null) {
            nav.removeAttribute('id')
        }
        wrapper.removeAttribute('id')
    }, [])
    return ( 
        <div className="main__wrapper">
            
        </div>
     );
}
 
export default MainPage;

