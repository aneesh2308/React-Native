import * as React from 'react';
import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from '../screens/home';
import Review from '../screens/review';
import  Header from "../shared/header";

// const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* <Navigator>
//         <Screen name="Home" component={Home} />
//         <Screen name="About" component={About} />
//         <Screen name="Review" component={Review} />
//         </Navigator> */}
//     </NavigationContainer>
//   );
// }

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={Home} options={({navigation})=>{return{ headerTitle:()=><Header navigation={navigation} title='GameZone'/>}}} />
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
}
export default function HomeStack() {
  return (
    <NavigationContainer theme={MyTheme} independent={true}>
      <MyStack />
    </NavigationContainer>   
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#eee',
    text:"#444",
  },
};
