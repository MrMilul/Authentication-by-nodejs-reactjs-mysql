import React from 'react'
import matches from 'lodash/matches'

export default function Matches(props) {
  return props.children(matches(props.source))
}

Matches.defaultProps = {
  children: value => value
}