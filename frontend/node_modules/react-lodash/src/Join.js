import React from 'react'
import join from 'lodash/join'

export default function Join(props) {
  return props.children(join(props.array, props.separator))
}

Join.defaultProps = {
  children: value => value
}