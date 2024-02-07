import { Text, View, Image } from "react-native";
import { Stack, useNavigation, useRouter } from "expo-router";

import { icons } from '../constants';
import styles from '../styles';

import { Events, EventForm, HomePage } from '../components';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Index = () =>
{
  const Tab = createBottomTabNavigator();
  const router = useRouter();
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerTitle: 'Sääohjelma',
        // height: 40


      }} />

      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              height: 50,
              paddingHorizontal: 2,
              paddingTop: 0,
              borderBottomColor: "#98FF6F",
              shadowRadius: 8,
              inactiveColor: styles.tab_navi_bottom.inactiveColor,

              paddingBottom: 4,
              backgroundColor: styles.tab_navi_bottom.backgroundColor,
              position: 'absolute',
              borderTopWidth: 2,
              borderTopColor: styles.tab_navi_bottom.activeColor
            }
          })}
        >

          <Tab.Screen name='Home' component={HomePage}
            options={{
              tabBarLabel: 'Koti',
              tabBarIcon: () => (
                <Image source={icons.home} style={styles.toolbar_bottom_icon} />
              )
            }}
          />

          <Tab.Screen name='Events' component={Events}
            options={{
              tabBarLabel: 'Tapahtumat',
              tabBarIcon: () => (
                <Image source={icons.calendar} style={styles.toolbar_bottom_icon} />
              )
            }}
          />

          <Tab.Screen name='EventForm' component={EventForm}
            options={{

              // tabBarButton: () => null,
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