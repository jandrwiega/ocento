import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppProvider from '../Context/AppContext';

import LogIn from './Account/LogIn';
import Register from './Account/Register';
import Navigation from './Navigation';
import Footer from './Footer';
import MainPage from './Pages/MainPage'

import '../Styles/App.css';

const App = () => {
    return ( 
        <div className="wrapper">
            <AppProvider>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path='/logowanie' children={<LogIn />}></Route>
                        <Route exact path='/rejstracja' children={<Register />}></Route>

                        <Route exact path='/' children={<MainPage />} />
                    </Switch>
                    <Footer />
                </Router>
            </AppProvider>
        </div>
     );
}
 
export default App;