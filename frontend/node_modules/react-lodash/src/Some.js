import React from 'react'
import some from 'lodash/some'

export default function Some(props) {
  const value = some(props.collection, props.predicate)
  return value ? props.yes() : props.no()
}

Some.defaultProps = {
  yes: () => {},
  no: () => {}
}