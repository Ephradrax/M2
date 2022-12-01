import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<div>
   {this.props.animals.map((skill, index)=>(
    <div key={index} > 
      <h5>{skill.name}</h5>
      <img
        src={skill.image}
        alt={skill.name}
        width={'300px'}
      />
      <br  />
      <span>{skill.specie}</span>
       </div>
   ))

   }


    </div>
  )}
}
