import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Action from './Action'

export const SuggestedActions = (props) => {
  const {
    actions = [],
    filterText = '',
    onSelectAction = () => false
  } = props

  const [filteredActions, setFilteredActions] = useState(actions)

  useEffect(() => {
    if (!filterText) {
      setFilteredActions(actions)
      return
    }
    setFilteredActions(
      actions.filter(x => x.toLowerCase().startsWith(filterText.toLowerCase()))
    )
  }, [filterText])

  return (
    <ScrollView>
      {
        filteredActions.map((action, i) => {
          return (
            <Action
              onSelectAction={onSelectAction}
              title={action}
              key={i}
            />
          )
        })
      }
    </ScrollView>
  )
}

export default SuggestedActions
