import React from 'react'

const Card = (props) => {
    console.log('THIS IS PROPS', props)
    return(
        <div className="card">
          <p>{props.name}</p>
          <p>{props.company}</p> 
          <p>{props.funFact}</p> 
        </div>
        
    ) 
}

export default Card