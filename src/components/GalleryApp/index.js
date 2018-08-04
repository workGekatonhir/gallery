import React from 'react';
import {connect} from 'react-redux';
import style from './style.css';
import ShowComments from '../../containers/ShowComments/';
import ShowPicture from '../../containers/ShowPicture/';
import AddComment from '.././AddComment';
import Image from '.././Image';


const GalleryApp =({imagePack,id})=>{

  return(
      <div className={style.container + " container "}>

          <div className={ style.row+" row justify-content-center "}>

                  {
                      imagePack.map(image=>{
                          return  <Image key={image.id}  image={image}/>
                      })
                  }


          </div>

          <AddComment packageId = {id} />
          <ShowComments id={id} />
          <ShowPicture images={imagePack} />




      </div>
  )

};

const getSelectedPackage =(id,images)=>{
    return images.filter(image=> image.packageId === Number(id));
};


const mapStateToProps = (state, ownProps) => ({
    imagePack :getSelectedPackage( ownProps.match.params.id,state.images),
    id : ownProps.match.params.id,
});

export default connect(mapStateToProps)(GalleryApp)