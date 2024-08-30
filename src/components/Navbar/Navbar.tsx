// import React from 'react'

import './index.scss'
import { Fragment } from "react/jsx-runtime"
import { IProps } from '../../interface/interfaces';
const styles = {
  listStyle:{
    listStyle:'none',
    display: 'flex',
    justifyContent:'space-around',
    padding: 15,
    margin: '0',
    width: '100%',
    background: '#333',
  }
}

const Navbar = ({company,adress,children,loginT,stateFun}:IProps) => {
  const API_MARGIN = 15;
  return (
    <Fragment>
      <h1>Navbar</h1>
      <ul className="list-test" style={{...styles.listStyle,margin: API_MARGIN}}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/">{company}</a></li>
        <li><a href="/">{adress}</a></li>
        <li><a href="/">{children}</a></li>
        <button onClick={()=>{stateFun("logOut")}}>{loginT}</button>
      </ul>
      {/* <span>Helooooooo</span> */}
    </Fragment>
  )
}

export default Navbar