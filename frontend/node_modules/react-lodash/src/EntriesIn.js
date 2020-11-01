import React from 'react'
import entriesIn from 'lodash/entriesIn'

export default function EntriesIn(props) {
  return props.children(entriesIn(props.object))
}

EntriesIn.defaultProps = {
  children: value => value
}