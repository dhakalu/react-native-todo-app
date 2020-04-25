# Add navigation

This branch contains the code which adds navigation on top of code from `feature-4-mark-as-done` branch. We will create 3 tabs. Tab 1 will include features of Todo. Tab 2 will contain features related to habits. And Tab 3 will be general settings.

## User Stories

 * TODO


To achieve I will be using the `React Navigation` library. It can be installed using the command below

```bashscript
    npm install @react-navigation/native @react-navigation/stack
```

Since my project was based on expo, I used the command below to intsall the dependencies that `react-navigation` needs.

```bash
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

More details on `react-navigation` can be found at their [docs](https://reactnavigation.org/docs/getting-started)

Once the necessary library are installed. 

`React Navigation` library has different navigation [options]. For my application I chose to use tabs that appear at the bottom of the screen - [`bottom-bats`](https://reactnavigation.org/docs/bottom-tab-navigator). 

`React Navigation` provides a function [`createBottomTabNavigator`](https://reactnavigation.org/docs/bottom-tab-navigator) which can be used to create the navigation bar at the bottom. Also to show a solid heading we will use [`createStackNavigator`](https://reactnavigation.org/docs/stack-navigator).

```bash
yarn add @react-navigation/bottom-tabs 
```