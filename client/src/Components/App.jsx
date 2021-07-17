import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AppProvider from '../Context/AppContext';

import LogIn from './Account/LogIn';
import Register from './Account/Register';
import Navigation from './Navigation';
import Footer from './Footer';
import MainPage from './Pages/MainPage'
import Works from './Pages/Works'

import Idea from './Pages/Idea';

import '../Styles/App.css';
import '../Styles/StaticComponentStyles/Main.css';

const App = () => {
    return ( 
        <div className="wrapper">
            <AppProvider>
                <Router>
                    <Navigation />
                    <main>
                    <Switch>
                        <Route exact path='/logowanie' children={<LogIn />} />
                        <Route exact path='/rejstracja' children={<Register />} />
                        <Route exact path='/' children={<MainPage />} />
                        <Route exact path='/pomysly' children={<Idea />} />
                        <Route exact path='/praca' children={<Works />} />
                    </Switch>
                    </main>
                    <Switch>
                        <Route exact path='/' children={<Footer />} />
                    </Switch>
                </Router>
            </AppProvider>
        </div>
     );
}
 
export default App;