import React from 'react'
import './Button.css';

const Button = ({color , name}) => {

  const styles = {
    backgroundColor:`${color}`,
    height:"36px",
    borderRadius:"10px",
    color:"#fff",
    border:'none'
  }

  return (
    <div className="buttons">
        <button className="new mx-2" style={styles}>{name}</button>
    </div>
  )
}

export default Button