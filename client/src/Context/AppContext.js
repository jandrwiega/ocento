import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isUserLogged, setIsUserLogged] = useState(false)
    
    return ( 
        <AppContext.Provider value={{ isUserLogged }}>
            {children}
        </AppContext.Provider>
     );
}
 
export default AppProvider;