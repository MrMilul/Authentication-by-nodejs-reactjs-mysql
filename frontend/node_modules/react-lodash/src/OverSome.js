import React from 'react'
import overSome from 'lodash/overSome'

export default function OverSome(props) {
  return props.children(overSome(props.predicates))
}

OverSome.defaultProps = {
  children: value => value
}