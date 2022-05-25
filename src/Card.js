import React from 'react'

const Card = (props) => {
    console.log('THIS IS PROPS', props)
    return(
        <div className="card">
          <h1>{props.name}</h1>
          <p>{props.company}</p> 
          <p>{props.funFact}</p> 
        </div>
        
    ) 
}

export default Card