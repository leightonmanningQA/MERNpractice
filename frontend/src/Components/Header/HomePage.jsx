import CreateTask from "./SideBar/CreateTask"

import { useState } from 'react'
import ReadTasks from "../ReadTasks";
const HomePage = () => {

  const [msg, setMsg] = useState('');

  const trigger = (data) => {
    setMsg(data);
  }

  return (
    <>
      {/* <h1>Welcome to the homepage</h1> */}
      <div className="row">
        <div className="col-md-2">
          <CreateTask trigger={trigger} />
          
        </div>
        <div className="container">
          <div className='col-md-10'>
            <div className="alert alert-success">{msg}</div>
            <ReadTasks msg={msg}trigger={trigger}/>
          </div>
        </div>
      </div>
    </>
  )

}
export default HomePage;