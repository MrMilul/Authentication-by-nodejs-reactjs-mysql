import React from 'react'
import parseInt from 'lodash/parseInt'

export default function ParseInt(props) {
  return props.children(parseInt(props.string, props.radix))
}

ParseInt.defaultProps = {
  children: value => value
}