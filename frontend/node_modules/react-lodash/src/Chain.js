import React from 'react'
import chain from 'lodash/chain'

export default function Chain(props) {
  return props.children(chain(props.value))
}

Chain.defaultProps = {
  children: value => value
}