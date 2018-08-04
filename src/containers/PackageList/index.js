import React from 'react';
import {connect} from 'react-redux';
import Package from '../Package/';
import style from './style.css';


const setPackages=({packages})=>{

      return (
              <div className={style.container + " container"}>
                 <div className="row justify-content-center">
                  {packages.map(item=>{
                    return(
                        <Package key={item.id} packageItem ={item}/>
                    );
                  })}
                 </div>
              </div>
      )
};


const mapStateToProps = (state)=>{
    return{
        packages: state.packages
    }
};

const PackageList = connect(
    mapStateToProps,

)(setPackages);



export default PackageList;