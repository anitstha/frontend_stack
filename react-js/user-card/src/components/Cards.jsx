import React from 'react'
import { Facebook, Instagram,Twitter, Linkedin, Youtube } from 'lucide-react'


const Cards = ({userImg,name,position,description}) => {
    return (
        <div className='card'>
          <img src={userImg} alt="user" />
          <h2>{name}</h2>
          <h3>{position}</h3>
            <p>{description}</p>
            <div className="socialIcons">
               <Facebook size={30} />
                <Instagram size={30} />
                <Twitter size={30} />
                <Linkedin size={30} />
                <Youtube size={30} />
            </div>
            <div className="connect">
                <button>Message</button>
                <button>Connect</button>
            </div>
    </div>
  )
}

export default Cards