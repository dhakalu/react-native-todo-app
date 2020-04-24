import React from 'react'
import { StyleSheet } from 'react-native'
import LandingScreen from './screens/LandingScreen'
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import CreateNewTodoFormScreen from './screens/CreateNewTodoFormScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const HOME_TAB_NAME = 'Home'
const DONE_TAB = 'Done'
const CREATE_TAB_NAME = 'Create'

const tabIconMap = {
  [HOME_TAB_NAME]: 'md-home',
  [CREATE_TAB_NAME]: 'md-create',
  [DONE_TAB]: 'md-checkbox-outline'
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
        options={tabScreenOptions.Home}
      />
      <Tab.Screen name={CREATE_TAB_NAME} component={CreateNewTodoFormScreen} />
      <Tab.Screen name={DONE_TAB} component={CreateNewTodoFormScreen} />
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
