import React from 'react'
import entries from 'lodash/entries'

export default function Entries(props) {
  return props.children(entries(props.object))
}

Entries.defaultProps = {
  children: value => value
}