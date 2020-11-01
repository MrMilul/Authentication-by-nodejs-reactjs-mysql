import React from 'react'
import isMatch from 'lodash/isMatch'

export default function IsMatch(props) {
  const value = isMatch(props.object, props.source)
  return value ? props.yes() : props.no()
}

IsMatch.defaultProps = {
  yes: () => {},
  no: () => {}
}