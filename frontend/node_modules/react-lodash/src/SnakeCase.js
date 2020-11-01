import React from 'react'
import snakeCase from 'lodash/snakeCase'

export default function SnakeCase(props) {
  return props.children(snakeCase(props.string))
}

SnakeCase.defaultProps = {
  children: value => value
}