import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import OnBoarding from "./../screens/OnBoarding";
import Welcome from "./../screens/Welcome";
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import Forgot from "./../screens/Forgot";
import Calculate from "./../screens/Calculate";
import Offering from "./../screens/Offering";
import Tithe from "./../screens/Tithe";
import PaySplash from "./../screens/PaySplash";
import Profile from "./../screens/Profile";
import Home from "./../screens/Home";
import Success from "../screens/Success";
import Needhelp from "../constants/Needhelp";
import Complaint from "../screens/Complaint";
import Admin from "../screens/Admin";
import AdminLogin from "./../screens/AdminLogin";
import AllUsers from "./../screens/AllUsers";
import UserComplaints from "../screens/UserComplaints";
import Hello from "../screens/Hello";
import Seed from "../screens/Seed";
import Confirm from "../screens/Confirm";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const InitialScreenOnStart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Hello"
        component={Hello}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AllUsers"
        component={AllUsers}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserComplaints"
        component={UserComplaints}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const Dashboard = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Calculate"
        component={Calculate}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Offering"
        component={Offering}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tithe"
        component={Tithe}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaySplash"
        component={PaySplash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Needhelp"
        component={Needhelp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Complaint"
        component={Complaint}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Seed"
        component={Seed}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const UserDashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 14,
          },

          tabBarIcon: (props) => (
            <FontAwesome name="dashboard" {...props} size={24} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 14,
          },

          tabBarIcon: (props) => (
            <AntDesign {...props} name="profile" size={24} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
