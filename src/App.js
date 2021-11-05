import './App.css';
import React         from "react";
import CookingRecipe from "./component/cookingRecipe";
import MenuToday     from "./component/menuToday";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
}                    from "react-router-dom";
import { Home }      from "./component/home";


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/random-meal">
                        <MenuToday/>
                    </Route>
                    <Route path="/recipe">
                        <CookingRecipe/>
                    </Route>
                </Switch>

                <ul>
                    <li>
                        <Link to="/random-meal">Random Meals</Link>
                    </li>
                    <li>
                        <Link to="/recipe">Cooking Recipe</Link>
                    </li>
                </ul>
            </Router>
        </div>
    )
}

export default App;
