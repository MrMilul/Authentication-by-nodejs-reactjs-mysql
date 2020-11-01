import React from 'react'
import keysIn from 'lodash/keysIn'

export default function KeysIn(props) {
  return props.children(keysIn(props.object))
}

KeysIn.defaultProps = {
  children: value => value
}