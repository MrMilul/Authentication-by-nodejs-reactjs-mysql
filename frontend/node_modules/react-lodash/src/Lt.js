import React from 'react'
import lt from 'lodash/lt'

export default function Lt(props) {
  const value = lt(props.value, props.other)
  return value ? props.yes() : props.no()
}

Lt.defaultProps = {
  yes: () => {},
  no: () => {}
}