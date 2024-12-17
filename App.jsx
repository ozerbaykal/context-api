import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './src/context/UserContext';
import Routes from './src/navigation/Routes';
const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
