import React from 'react'
import keys from 'lodash/keys'

export default function Keys(props) {
  return props.children(keys(props.object))
}

Keys.defaultProps = {
  children: value => value
}