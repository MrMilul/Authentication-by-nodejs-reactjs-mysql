import React from 'react'
import matchesProperty from 'lodash/matchesProperty'

export default function MatchesProperty(props) {
  return props.children(matchesProperty(props.path, props.srcValue))
}

MatchesProperty.defaultProps = {
  children: value => value
}