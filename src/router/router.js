import React, {Component} from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import LoginPage from '../Components/Loginpage/Login';
import Dashboard from '../Components/Dashborad/Dashboard'
class router extends Component {

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        {/* <Route exact path='/' component={LoginPage} /> */}
                        <Route path='/' component={Dashboard} />
                    </Switch>
                </Router>
            </div>

        )
    }
}
export default router;
