import {
    StackNavigator
} from 'react-navigation';

import Route from './pages/Route'
import RouteItem from './pages/RouteItem'
import ChooseArea from './pages/ChooseArea'


const App = StackNavigator(
    {
        Home: {screen:ChooseArea},
        Route: { screen:Route}
    }
)


export default App;