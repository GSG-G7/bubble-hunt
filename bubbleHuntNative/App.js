import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './componets/home';
import Login from './componets/login';
import Signup from './componets/signup';

const Navigator = createStackNavigator({
  Login,
});

const App = createAppContainer(Navigator);

export default App;
