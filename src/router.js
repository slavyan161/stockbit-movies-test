import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LayoutComponent from "./component/layouts/layout.component";
import DetailComponent from './main/home/detail/detail.component'
import Home from './main/home/home.component'

function Routers() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/detail">
                        <LayoutComponent>
                            <DetailComponent />
                        </LayoutComponent>
                    </Route>
                    <Route path="/">
                        <LayoutComponent>
                            <Home />
                        </LayoutComponent>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routers
