import React from 'react'
import sortedUniq from 'lodash/sortedUniq'

export default function SortedUniq(props) {
  return props.children(sortedUniq(props.array))
}

SortedUniq.defaultProps = {
  children: value => value
}