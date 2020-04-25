import React from 'react'
import { StyleSheet } from 'react-native'
import LandingScreen from './screens/LandingScreen'
import HabitsMainScreen from './screens/HabitsMainScreen'
import SettingsMainScreen from './screens/SettingsMainScreen'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const HOME_TAB_NAME = 'Todos'
const OTHERS_TAB = 'Settings'
const HABITS_TAB_NAME = 'Habits'

const tabIconMap = {
  [HOME_TAB_NAME]: 'md-checkbox',
  [HABITS_TAB_NAME]: 'md-refresh-circle',
  [OTHERS_TAB]: 'md-menu'
}

const getScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = tabIconMap[route.name]

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />
  }
})

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray'
}

const tabScreenOptions = {
  Home: {
    title: 'Home'
    // headerTitle: () => <Text>ToDO</Text>
  }
}

const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={getScreenOptions}
    >
      <Tab.Screen
        name={HOME_TAB_NAME}
        component={LandingScreen}
        options={{ title: 'Todo'}}
      />
      <Tab.Screen name={HABITS_TAB_NAME} component={HabitsMainScreen} />
      <Tab.Screen name={OTHERS_TAB} component={SettingsMainScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: 'Todos' }}
          name='todo' component={Home}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 92
  },
  todo: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    elevation: 1
  }
})

export default App
