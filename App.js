import Routes from './src/routes';
import { NavigationContainer } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}