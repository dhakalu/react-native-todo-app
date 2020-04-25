# Group/Categorize Tasks

## User Stories

* As a user, I would want to see all the tasks that are due today at one place.

To do that we will have to update the `<ScrollView>` of `<TodoList>` component with `<SectionList>`. Details on SectionList can be fond [here](https://reactnative.dev/docs/sectionlist) We first group the data to look like someting like below: 

```javascript
[
    {
        title: 'Today',
        data: [...todos_due_today]
    }
]
```

We achieved that using the `groupBy` method provided by `lodash`. The complete code would look like: 

```javascript
const groupTodos = (todos) => {
  const dataMap = _.groupBy(todos, getCategory)
  const sections = Object.keys(dataMap).map(key => {
    return {
      title: key,
      data: dataMap[key]
    }
  })
  return sections
}
```

In `getCategory` we used `momentJS` to return the category based on the `dueOn` key of the todo. The code that finds the categry for a gievn todo is: 

```javascript
export const getCategory = (todo) => {
  const { dueOn } = todo
  if (!dueOn) return 'Some Day'
  return moment(dueOn).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: '[Next] dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: '[Upcomming]'
  })
}
```