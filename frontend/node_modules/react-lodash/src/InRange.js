import React from 'react'
import inRange from 'lodash/inRange'

export default function InRange(props) {
  const value = inRange(props.number, props.start, props.end)
  return value ? props.yes() : props.no()
}

InRange.defaultProps = {
  yes: () => {},
  no: () => {}
}