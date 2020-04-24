# Mark a todo item as done

Once the user completes a todo, he/she needs to mark it as done. In this branch we will add that feature.
When user clicks and holds a given todo, we will mark it as done. Once a todo is marked as done, we will
cross the todo to have the visual indication. We will move the todo to that was marked as complete to list of compeleted Todo.

To achieve this the most intutive action would be to add `onPress` on top level `View` of `Todo.js` component. But this does not
work. Instead we will have to use `Touchable*` component from `React Native`. For our purpose we use `TouchableOpacity` but there are other options with different animations.
