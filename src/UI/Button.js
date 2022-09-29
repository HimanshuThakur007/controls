import React from 'react'

const Button = (props) => {
  const classes = "btn btn-primary" + props.className
  return (
    <>
    <button type="button" className = {classes}>{props.title}</button>
    </>
  )
}

export default Button