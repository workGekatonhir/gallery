import React from 'react';
import style from './style.css';
import { Link } from "react-router-dom";



const Package = ({packageItem})=>{
    return (

        <div className={style.packageWrapper+" col-md-4"} >
            <Link className={style.link} to={"/show/"+packageItem.id}>
                <div className={style.contentBody}>

                    <img className={style.img} src={packageItem.preview} alt="preview"/>
                    <div className={style.title+" text-center"}>
                        {packageItem.title}
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Package;