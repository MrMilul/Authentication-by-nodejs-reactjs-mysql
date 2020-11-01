import React from 'react'
import overEvery from 'lodash/overEvery'

export default function OverEvery(props) {
  return props.children(overEvery(props.predicates))
}

OverEvery.defaultProps = {
  children: value => value
}