import React from 'react'
import keyBy from 'lodash/keyBy'

export default function KeyBy(props) {
  return props.children(keyBy(props.collection, props.iteratee))
}

KeyBy.defaultProps = {
  children: value => value
}