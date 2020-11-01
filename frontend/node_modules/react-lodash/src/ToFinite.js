import React from 'react'
import toFinite from 'lodash/toFinite'

export default function ToFinite(props) {
  return props.children(toFinite(props.value))
}

ToFinite.defaultProps = {
  children: value => value
}