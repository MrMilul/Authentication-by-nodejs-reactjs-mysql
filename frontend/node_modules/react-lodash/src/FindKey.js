import React from 'react'
import findKey from 'lodash/findKey'

export default function FindKey(props) {
  return props.children(findKey(props.object, props.predicate))
}

FindKey.defaultProps = {
  children: value => value
}