import React from 'react'
import template from 'lodash/template'

export default function Template(props) {
  return props.children(template(props.string, props.options))
}

Template.defaultProps = {
  children: value => value
}