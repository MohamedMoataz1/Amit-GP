import React, { Fragment, useState } from 'react'
import taskcss from "../css/task.module.css"
const Task = () => {
    const [x,setx] = useState(false);
    const [data , setData] = useState({
        uname : "",
        email : "" , 
        address : ""
    })
    return (
        <Fragment>
            <div>
                <h1 style= {x ? { width : '100%' , height : '100vh' , backgroundColor: 'brown' }: {width : '50%' , height : '50vh' , backgroundColor: 'red'}}>Vitolo Guten berg</h1>
                <button onClick={()=>setx(!x)}>Click me hard</button>
                <form >
                    <input type="text"
                    placeholder='username'
                    value={data.uname}
                    onChange={(e)=>setData({uname : e.target.value}) } />
                    <input type="text"
                    placeholder='email'
                    value={data.email}
                    onChange={(e)=>setData({email : e.target.value}) } />
                    <input type="text"
                    placeholder='username'
                    value={data.address}
                    onChange={(e)=>setData({address : e.target.value}) } />
                    <button>Submit</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Task