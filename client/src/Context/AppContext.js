import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const fetchLink = 'http://127.0.0.1:5000/'
    const [isUserLogged, setIsUserLogged] = useState(false)
    
    return ( 
        <AppContext.Provider value={{ fetchLink, isUserLogged, setIsUserLogged }}>
            {children}
        </AppContext.Provider>
     );
}
 
export default AppProvider;