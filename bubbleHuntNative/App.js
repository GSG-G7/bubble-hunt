import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './componets/home';
import Login from './componets/login';
import Signup from './componets/signup';
import Stats from './componets/stats';

const Navigator = createStackNavigator({
  Stats,
});

const App = createAppContainer(Navigator);

export default App;
