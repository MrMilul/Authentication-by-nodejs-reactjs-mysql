import React from 'react'
import values from 'lodash/values'

export default function Values(props) {
  return props.children(values(props.object))
}

Values.defaultProps = {
  children: value => value
}