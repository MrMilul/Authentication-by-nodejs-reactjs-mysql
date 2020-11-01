import React from 'react'
import pull from 'lodash/pull'

export default function Pull(props) {
  return props.children(pull(props.array, props.values))
}

Pull.defaultProps = {
  children: value => value
}