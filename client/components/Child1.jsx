import React from 'react'

const Child1 = props => {
  return (
      <div>
        <h2>Child1</h2>
        <a href='' onClick={e => props.changeChild('Child2', e)}>Change Child</a>
      </div>
    )
  }

export default Child1
