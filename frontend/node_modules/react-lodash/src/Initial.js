import React from 'react'
import initial from 'lodash/initial'

export default function Initial(props) {
  return props.children(initial(props.array))
}

Initial.defaultProps = {
  children: value => value
}