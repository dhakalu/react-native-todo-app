# Add navigation

In this branch I will be adding some navigation. We will have 3 tabs. 1st tab will show the list of todos. Second tab will allow the user to create a new TODO and 3 tab will contain the list of items that have been completed. 

To achieve I will be using the `react-navigation` library.

To install the library, I used:

```
    npm install @react-navigation/native @react-navigation/stack
```

Since my project was based on expo,  Iused the commands below to intsall the dependencies that `react-navigation` needs 

```
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

More details on `react-navigation` can be found at their [docs](https://reactnavigation.org/docs/getting-started)

Once the necessary library are installed. 

`React Navigation` library has different navigation [options]. For my application I chose to use tabs that appear at the bottom of the screen - [`bottom-bats`](https://reactnavigation.org/docs/bottom-tab-navigator). 

`React Navigation` provides a function [`createBottomTabNavigator`](https://reactnavigation.org/docs/bottom-tab-navigator) which can be used to create the navigation bar at the bottom.  

yarn add @react-navigation/bottom-tabs 

I will update the `App.js` to hanlde the navigation. So, changes made on App componet look like: 
```
 const App = () => {
   return (
-    <View style={styles.container}>
-      <Header />
-      <LandingScreen />
-    </View>
+    <NavigationContainer style={styles.container}>
+      <Tab.Navigator
+        tabBarOptions={tabBarOptions}
+        screenOptions={getScreenOptions}
+      >
+        <Tab.Screen name={HOME_TAB_NAME} component={LandingScreen} />
+        <Tab.Screen name={CREATE_TAB_NAME} component={CreateNewTodoFormScreen} />
+        <Tab.Screen name={DONE_TAB} component={CreateNewTodoFormScreen} />
+      </Tab.Navigator>
+    </NavigationContainer>
   )
 }
 ```