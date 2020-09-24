import * as React from 'react';
import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem, } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

function Drawers() {
  return (
     <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
  );
}
export default function Draw() {
  return (
    <NavigationContainer theme={MyTheme} independent={true}>
      <Drawers />
    </NavigationContainer>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#eee',
    text:"#444",
    card:"#ddd",
  },
};
