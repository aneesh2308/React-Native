import * as React from 'react';
import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import About from '../screens/about';
import  Header from "../shared/header";

const Stack = createStackNavigator();

function MyAboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={({navigation})=>{return{ headerTitle:()=><Header navigation={navigation} title='About GameZone'/>}}} />
    </Stack.Navigator>
  );
}
export default function AboutStack() {
  return (
    <NavigationContainer theme={MyTheme} independent={true}>
      <MyAboutStack />
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
