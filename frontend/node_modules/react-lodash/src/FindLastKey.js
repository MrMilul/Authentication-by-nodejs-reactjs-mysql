import React from 'react'
import findLastKey from 'lodash/findLastKey'

export default function FindLastKey(props) {
  return props.children(findLastKey(props.object, props.predicate))
}

FindLastKey.defaultProps = {
  children: value => value
}