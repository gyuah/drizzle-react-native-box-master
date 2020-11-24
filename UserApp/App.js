import React from 'react';
import StartScreen from './Screen/start.js';
import LoginScreen from './Screen/login.js';
import RegisterScreen from './Screen/register.js';
import MainScreen from './Screen/main.js';
import ChatScreen from './Screen/chat.js';
import AccountScreen from './Screen/account.js';
import HowtouseScreen from './Screen/howtouse.js';
import FAQScreen from './Screen/faq.js';
import OneononeScreen from './Screen/oneonone.js';
import HistoryScreen from './Screen/userHistory/history.js';
import QRScreen from './Screen/qrcode.js';
import WalletScreen from './Screen/wallet.js';
import payHistoryScreen from './Screen/userHistory/payHistory.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Animated } from 'react-native';
import LendingScreen from './Screen/lending.js';

var id = 'csmoon';
const config = {
  animation: 'timing',
  config: {
    toValue: 250,
    duration: 2000
  },
};
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{headerShown:false,transitionSpec: {
      open: config,
      close: config,
    },}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle:''}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitle:''}}/>
        <Stack.Screen name="QR" component={QRScreen} options={{headerTitle:''}}/>
        <Stack.Screen name="Sub" component={SubMenu} options={{headerTitle:''}}/> 
        <Stack.Screen name="HOWTOUSE" component={HowtouseScreen} options={{headerTitle:''}}/> 
        <Stack.Screen name="FAQ" component={FAQScreen} options={{headerTitle:''}}/> 
        <Stack.Screen name="ONEONONE" component={OneononeScreen} options={{headerTitle:''}}/> 
        {/* header 처리 알아보기 */}
        <Stack.Screen name="payHistory" component={payHistoryScreen} options = {{headerTitle:'이용내역'}}/>
        <Stack.Screen name="lending" component={LendingScreen} options = {{headerTitle:'대여'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

const Drawer = createDrawerNavigator();
function SubMenu() {
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name = "Home" component={MainScreen}/>
      <Drawer.Screen name = "회원가입" component={RegisterScreen}/>
      <Drawer.Screen name = "로그인" component={LoginScreen}/>
      <Drawer.Screen name = "이용내역" component={HistoryScreen}/>
      <Drawer.Screen name = "고객지원" component={ChatScreen}/>
      <Drawer.Screen name = "지갑" component={WalletScreen}/>
      <Drawer.Screen name = "Account" component={AccountScreen}/>
    </Drawer.Navigator>
  );
}
  const Tab = createBottomTabNavigator();
//onst SearchScreenComponent = () => {
//return null;
// }
function Home() {
 return ( //대여 button(qr코드), serach(map api) 추가
    <Tab.Navigator tabBarOptions = {{labelStyle:{fontSize : 13}, tabStyle : {justifyContent : 'center'}} }>
      < Tab.Screen name = "Main" component={MainScreen}/>
     { //<Tab.Screen name = "Search" component={MainScreen} options={{
       // tabBarButton: () => (<ModalTester />),
     //}}/> 
     }
      <Tab.Screen name = "QR" component={QRScreen}/>
      <Tab.Screen name = "Chat" component={ChatScreen}/>
    </Tab.Navigator>
  ); 
} 
 

export default App;