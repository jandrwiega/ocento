import { createContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie'

export const AppContext = createContext();

const AppProvider = ({children}) => {

    useEffect(() => {
        const cookies = new Cookies()
        const isLogged = cookies.get('isLogged')
        const userData = cookies.get('userData')
        // eslint-disable-next-line
        if(isLogged, userData !== undefined || userData !== []) {
            setIsUserLogged(isLogged)
            setLoginData(userData)
        }  
    }, [])

    const fetchLink = 'http://127.0.0.1:5000/'
    const [isUserLogged, setIsUserLogged] = useState(false)
    const [loginData, setLoginData] = useState([])
    
    return ( 
        <AppContext.Provider value={{ fetchLink, isUserLogged, setIsUserLogged, loginData, setLoginData }}>
            {children}
        </AppContext.Provider>
     );
}
 
export default AppProvider;