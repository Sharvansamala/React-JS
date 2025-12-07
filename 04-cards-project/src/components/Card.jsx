import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="" /> */}
                    <img src={props.logo} alt="" />
                    <button onClick={()=> window.open("https://www.sharvansamala.com","_target")}>Save <Bookmark size={14} /></button>
                </div>
                <div className="center">
                    <h3>{props.company} <span> {props.datePosted}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card
