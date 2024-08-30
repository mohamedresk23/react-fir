// import React from 'react'
import { ChangeEvent, useState } from 'react'
import './idex.scss'
import { formInputList } from '../../data';
import { IUserData } from '../../interface/interfaces';

const index = () => {
  const [userDataState, setUserDataState] = useState<IUserData>({
    userName: '',
    email: '',
    address: '',
    password: '', 
  });

  const userData = (eve:ChangeEvent<HTMLInputElement>) => { 
    const { name , value } = eve.target;

    setUserDataState({
      ...userDataState,
      [name]: value
    })
   }

  // ** Renders
  const renderFormInputList= formInputList.map((input,i) => { 
    return (<div className="form-faild" key={i} >
        <input type={input.type} name={input.name} id={input.id} placeholder={input.placeholder} value={userDataState[input.name]} onChange={userData}/>
      </div>)
   })

   console.log(userDataState)
  return (
    <form onSubmit={(e) => { e.preventDefault() }}>
      {renderFormInputList}

      {/* old way */}
      {/* <div className="form-faild">
        <input type="text" name="userName" id="userName" placeholder='User Name' value={userDataState.userName} onChange={userData}/>
      </div>
      <div className="form-faild">
        <input type="email" name="email" id="email" placeholder='Email' value={userDataState.email} onChange={userData} />
      </div>
      <div className="form-faild">
        <input type="text" name="address" id="address" placeholder='Address' value={userDataState.address} onChange={userData} />
      </div>
      <div className="form-faild">
        <input type="password" name="password" id="password" placeholder='Password' value={userDataState.password} onChange={userData} />
      </div> */}
      <button>Login</button>
    </form>
  )
}

export default index