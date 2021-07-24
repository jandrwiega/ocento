import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import AppProvider from '../Context/AppContext';

import LogIn from './Account/LogIn';
import Register from './Account/Register';
import Navigation from './Navigation';
import Footer from './Footer';
import MainPage from './Pages/MainPage'
import Works from './Pages/Works'
import Privacy from './Pages/Legal/Privacy';
import Terms from './Pages/Legal/Terms'
import CookiesInfo from './Static/CookiesInfo'

import Idea from './Pages/Idea';

import '../Styles/App.css';
import '../Styles/StaticComponentStyles/Main.css';

const App = () => {
    const [cookiesAccepter, setCookiesAccepted] = useState(true)
    const handleSetCookiesAccepted = () => setCookiesAccepted(true)

    useEffect(() => {
        const cookies = new Cookies();
        const isCookiesAccepted = cookies.get('cookiesAccepted');
        if(isCookiesAccepted === undefined) {
            setCookiesAccepted(false)
        }   else {
            setCookiesAccepted(true)
        }
    }, [cookiesAccepter])

   // console.clear();
    return ( 
        <div className="wrapper">
            <AppProvider>
                <Router>
                    <Switch>
                        <Route exact path='/polityka-prywatnosci' children={null} />
                        <Route exact path='/*' children={cookiesAccepter ? null : <CookiesInfo accept={handleSetCookiesAccepted}/>} />
                    </Switch>

                    <Switch>
                        <Route exact path='/polityka-prywatnosci' children={cookiesAccepter ? <Navigation /> : null} />
                        <Route exact path='/*' children={<Navigation />} />
                    </Switch>

                    <main>
                    <Switch>
                        <Route exact path='/logowanie' children={<LogIn />} />
                        <Route exact path='/rejstracja' children={<Register />} />
                        <Route exact path='/' children={<MainPage />} />
                        <Route exact path='/pomysly' children={<Idea />} />
                        <Route exact path='/praca' children={<Works />} />
                        <Route exact path='/polityka-prywatnosci' children={<Privacy />} />
                        <Route exact path='/regulamin' children={<Terms />} />
                    </Switch>
                    </main>
                    <Switch>
                        <Route exact path='/' children={<Footer />} />
                        <Route exact path='/pomysly' children={<Footer />} />
                        <Route exact path='/praca' children={<Footer />} />
                        <Route exact path='/polityka-prywatnosci' children={cookiesAccepter ? <Footer /> : null} />
                        <Route exact path='/regulamin' children={<Footer />} />
                    </Switch>
                </Router>
            </AppProvider>
        </div>
     );
}
 
export default App;