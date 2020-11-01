import React from 'react'
import toPlainObject from 'lodash/toPlainObject'

export default function ToPlainObject(props) {
  return props.children(toPlainObject(props.value))
}

ToPlainObject.defaultProps = {
  children: value => value
}