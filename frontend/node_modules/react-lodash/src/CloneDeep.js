import React from 'react'
import cloneDeep from 'lodash/cloneDeep'

export default function CloneDeep(props) {
  return props.children(cloneDeep(props.value))
}

CloneDeep.defaultProps = {
  children: value => value
}