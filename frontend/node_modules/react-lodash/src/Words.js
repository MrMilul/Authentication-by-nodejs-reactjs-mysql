import React from 'react'
import words from 'lodash/words'

export default function Words(props) {
  return props.children(words(props.string, props.pattern))
}

Words.defaultProps = {
  children: value => value
}