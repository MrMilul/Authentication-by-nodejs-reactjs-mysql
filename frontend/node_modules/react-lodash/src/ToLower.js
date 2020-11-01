import React from 'react'
import toLower from 'lodash/toLower'

export default function ToLower(props) {
  return props.children(toLower(props.string))
}

ToLower.defaultProps = {
  children: value => value
}