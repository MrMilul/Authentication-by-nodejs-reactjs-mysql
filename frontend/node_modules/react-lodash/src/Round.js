import React from 'react'
import round from 'lodash/round'

export default function Round(props) {
  return props.children(round(props.number, props.precision))
}

Round.defaultProps = {
  children: value => value
}