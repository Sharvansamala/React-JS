import React from 'react'

const Card = (props) => {
console.log(props.user,props.age);

  return (
    <div>
      <div className="card">
        {/* <img src="https://images.unsplash.com/photo-1763987209766-d9bb8836c0e2?q=80&w=204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nam.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
