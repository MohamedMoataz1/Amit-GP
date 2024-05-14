import React, { Fragment, useEffect, useState } from 'react'

const Effect = () => {
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            setx(e.clientX);
            sety(e.clientY);
            
        })
    })
    return (
        <Fragment>
            <div  >
                <h1>clicked on x = {x}</h1>
                <h1>clicked on y = {y}</h1>
                <div style={{position : 'absolute' , left : x , top : y , backgroundColor : 'blue' , width : '5px', height:'5px',borderRadius : '50%'}}>

                </div>

            </div>
        </Fragment>
    )
}

export default Effect