import React from 'react'
import forIn from 'lodash/forIn'

export default function ForIn(props) {
  return props.children(forIn(props.object, props.iteratee))
}

ForIn.defaultProps = {
  children: value => value
}