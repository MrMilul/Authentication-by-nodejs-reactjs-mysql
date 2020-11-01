import React from 'react'
import hasIn from 'lodash/hasIn'

export default function HasIn(props) {
  const value = hasIn(props.object, props.path)
  return value ? props.yes() : props.no()
}

HasIn.defaultProps = {
  yes: () => {},
  no: () => {}
}