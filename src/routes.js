import { Switch, BrowserRouter, Route } from 'react-router-dom';
import GameList from './pages/GameList/';
import ShoppingCart from './pages/ShoppingCart/';
import GameDescription from './pages/GameDescription/';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={GameList} />
                <Route path='/cart' exact component={ShoppingCart} />
                <Route path='/gamelist/:id' exact component={GameDescription} />
            </Switch>
        </BrowserRouter>
    );
}