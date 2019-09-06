import React from 'react'

const Comments = (props) => {
  return(
    <div>
    <button onClick={props.hey}>{props.title}</button>
    </div>
  )
}

export default Comments;