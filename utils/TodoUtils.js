import moment from 'moment'

/**
* Checks the dueDate and creates a category for it
* @param {*} todo: Todo instance
*/
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
