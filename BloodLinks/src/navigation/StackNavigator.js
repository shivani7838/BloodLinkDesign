import * as React from 'react';
import {Image} from 'react-native-elements/dist/image/Image';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screens/Splash';
import Slider from '../screens/Slider';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import BecomeDonor from '../screens/BecomeDonor';
import BecomeDonor1 from '../screens/BecomeDonor1';
import RequestForBlood from '../screens/RequestForBlood';
import BloodBank from '../screens/BloodBank';
import Home from '../screens/Home';
import BloodBankList from '../screens/BloodBankList';
import SearchServices from '../screens/SearchServices';
import PrimaryAddress from '../screens/PrimaryAddress';
import BasicHelthDetails from '../Components/Forms/BasicHelthDetails';
import SurgeryAndIllness from '../screens/SurgeryAndIllness';
import Profile from '../screens/Profile';
import Notifiaction from '../screens/Notifiaction';
// import BottomNav from './BottomNav';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      {/* initialRouteName="BloodBankList" */}
      <Stack.Navigator>
        {/* <Stack.Screen name="Profile" component={SearchServices} /> */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RequestForBlood"
          component={RequestForBlood}
          options={{title: 'Request For Blood'}}
        />
        <Stack.Screen
          name="BecomeDonor"
          component={BecomeDonor}
          options={{title: 'Become Donor'}}
        />
        <Stack.Screen
          name="BecomeDonor1"
          component={BecomeDonor1}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="BloodBank"
          component={BloodBank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BloodBankList"
          component={BloodBankList}
          options={{
            title: 'Blood Banks',
          }}
        />
        <Stack.Screen
          name="SearchServices"
          component={SearchServices}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrimaryAddress"
          component={PrimaryAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BasicHelthDetails"
          component={BasicHelthDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SurgeryAndIllness"
          component={SurgeryAndIllness}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const BottomNav = () => {
  return (
    // <NavigationContainer>

    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Notifiaction"
        component={Notifiaction}
        // options={{
        //   tabBarLabel: 'Updates',
        //   tabBarIcon: ({ focused,color, size }) => {
        //     const icon=focused?"bell":"home";
        //     return (
        //       <Image source={require('../assets/icons/location.png')} style={{backgroundColor:color}}/>
        //     // <MaterialCommunityIcons name={icon} color={color} size={size} />
        //   )
        //   },
        // }}
      />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};
export default StackNavigator;
