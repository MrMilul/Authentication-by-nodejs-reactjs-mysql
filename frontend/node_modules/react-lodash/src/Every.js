import React from 'react'
import every from 'lodash/every'

export default function Every(props) {
  const value = every(props.collection, props.predicate)
  return value ? props.yes() : props.no()
}

Every.defaultProps = {
  yes: () => {},
  no: () => {}
}