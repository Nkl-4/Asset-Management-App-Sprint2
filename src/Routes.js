import DeleteUserByIdComponent from './components/DeleteUserByIdComponent'
import EditUserDataComponent from './components/EditUserDataComponent'
import fetchUserDetailsComponent from './components/fetchUserDetailsComponent'
import LandingComponent from './components/LandingComponent'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import UsersListComponent from './components/UsersListComponent'
import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LandingComponent} exact />
            <Route path="/login" component={LoginComponent} />
            <Route path={`/register`} component={RegisterComponent} />
            <Route path="/usersList" component={UsersListComponent} />
            <Route path={`/getUserByid/:id`} component={fetchUserDetailsComponent} />
            <Route path={`/deleteUser/:id`} component={DeleteUserByIdComponent} />
            <Route path={`/modifyUser/:id`} render={(props) => <EditUserDataComponent {...props}/>}/>
        </Switch>
    </BrowserRouter>
)


export default Routes;