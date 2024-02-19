import { Text, View, Image, Platform } from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";

import { icons } from '../constants';
import styles from '../styles';

import { Events, EventForm, HomePage } from '../components';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// import PermissionsManagement from "../utils/Permissions";
import { WeatherEnums } from "../utils/WeatherEnums";

const Index = () =>
{
  const Tab = createBottomTabNavigator();
  const router = useRouter();
  const navigation = useNavigation();

  // if (Platform.OS == 'android')
  // {
  //   if (PermissionsManagement.checkPermission(WeatherEnums.LOCATION))
  //   {
  //     console.log('YES');
  //     //PermissionsManagement.addPermission(WeatherEnums.LOCATION);
  //   } else
  //   {
  //     PermissionsManagement.addPermission(WeatherEnums.LOCATION);
  //   }

  // }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerTitle: 'Sääohjelma',

      }} />

      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              height: 50,
              paddingTop: 1,
              inactiveColor: styles.tab_navi_bottom.inactiveColor,
              padding: 2,
              backgroundColor: styles.tab_navi_bottom.backgroundColor,
              position: 'absolute',
              borderTopWidth: 1,
              borderTopColor: styles.tab_navi_bottom.activeColor
            }
          })}
        >

          <Tab.Screen name='Home' component={HomePage}
            options={{
              tabBarLabel: 'Koti',
              tabBarLabelStyle: { color: styles.tab_navi_bottom.activeColor },
              tabBarIcon: () => (
                <Image source={icons.home} style={styles.toolbar_bottom_icon} />
              )
            }}
          />

          <Tab.Screen name='Events' component={Events}
            options={{
              tabBarLabel: 'Tapahtumat',
              tabBarLabelStyle: { color: styles.tab_navi_bottom.activeColor },
              tabBarIcon: () => (
                <Image source={icons.calendar} style={styles.toolbar_bottom_icon} />
              )
            }}
          />

          <Tab.Screen name='EventForm' component={EventForm}
            options={{

              // tabBarButton: () => null,
              tabBarLabelStyle: { color: styles.tab_navi_bottom.activeColor },
              tabBarVisible: true,
              tabBarIcon: () => (
                <Image source={icons.report} style={styles.toolbar_bottom_icon} />
              )
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}



export default Index;