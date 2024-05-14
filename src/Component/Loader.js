import React, { Fragment } from 'react'
import loading from '../css/loader.module.css'
const Loader = () => {
    return (
        <Fragment>
            <div className={loading.parent}>

                <span className={loading.loader} ></span>
            </div>
        </Fragment>
    )
}

export default Loader