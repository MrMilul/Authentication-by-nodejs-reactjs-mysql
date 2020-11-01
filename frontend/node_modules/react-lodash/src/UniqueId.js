import React from 'react'
import uniqueId from 'lodash/uniqueId'

export default function UniqueId(props) {
  return props.children(uniqueId(props.prefix))
}

UniqueId.defaultProps = {
  children: value => value
}