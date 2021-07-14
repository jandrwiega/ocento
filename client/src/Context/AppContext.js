import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState(false)
    const handleUserLogged = () => setUserLogged(!userLogged)
    return ( 
        <AppContext.Provider value={{ userLogged, handleUserLogged }}>
            {children}
        </AppContext.Provider>
     );
}
 
export default AppProvider;