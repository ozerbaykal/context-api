import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './src/context/UserContext';
import Routes from './src/navigation/Routes';
import { TaskProvider } from './src/context/TaskContext';
const App = () => {
  return (
    <UserProvider>
      <TaskProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      </TaskProvider>
    </UserProvider>
  );
};

export default App;
