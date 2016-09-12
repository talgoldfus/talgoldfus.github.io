import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Terms from './components/Terms'
import Logout from './components/Logout'


export default (
<div>
    <Route path="/" component={App} />
    <Route path="/terms" component={Terms} />
    <Route path="/policy" component={Terms} />
    <Route path="/settings" component={Terms} />
    <Route path="/logout" component={Logout} />
</div>
)
