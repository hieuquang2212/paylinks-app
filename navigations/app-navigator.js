import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../components/Home';
import QRCodeScanner from '../components/QRCodeScanner';
import TransitionNotiScreen from '../components/TransitionNoti';
import { createDrawerNavigator, DrawerItem,DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import * as React from 'react';
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
// export default function AppNavigator() {
//     return (
//         <AppStack.Navigator headerMode='none'>
            
//         </AppStack.Navigator>,
//     )
       
// }
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Đăng xuất"
          onPress={() => props.navigation.navigate('auth', { Screen: 'login'})}
        />
        <DrawerItem
          label="Đóng"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}}/>
            <Drawer.Screen name="QRScan" component={QRCodeScanner} options={{ title: 'QRScan'}}/>
            <Drawer.Screen name="TransitionNoti" component={TransitionNotiScreen} options={{ title: 'Success'}}/>
        </Drawer.Navigator>
    )
}