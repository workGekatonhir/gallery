import React from 'react';
import style from './style.css';
import {connect} from "react-redux";
import {closeImage,changeImage} from '../../actions';

class ShowPicture  extends React.Component{
    constructor(props){
        super(props);
        let div;
    }

    componentDidMount() {
        this.props.onClose();
    }

    render(){
        return(

            <div style={{transformOrigin:this.props.PictureClick.posX+'px '+ this.props.PictureClick.posY+'px'}} ref={node=>{this.div = node}} className={this.props.PictureClick.imageIsClick ? style.background  : style.backgroundNone} onClick={()=>{ this.props.onClose() }}>

                <div className={style.row+" row"}>

                    <div className={style.TopButtons}>
                        <div className={style.crossWrapper}>
                            <div className={style.leftCross}/>
                            <div className={style.rightCross}/>
                        </div>
                    </div>

                    <div className={style.Button+" col-md-1"+' '+style.LeftWrapper}>
                        <div className={style.ArrowWrapper }
                             onClick={(event)=>{
                                 event.stopPropagation();
                                 this.props.onPrewtPicture(this.props.PictureClick,this.props.images);
                             }}>
                            <div className={style.LeftArrow}>
                            </div>
                        </div>
                    </div>

                    <div className={style.imageWrapper+" col-md-8"}
                         onClick={(event)=>{
                             event.stopPropagation();
                         }}
                    >
                        <img className={style.image} src={this.props.PictureClick.imageSrc} alt="a"/>
                    </div>

                    <div className={style.Button+" col-md-1 "+style.RightWrapper}
                         onClick={(event)=>{
                             event.stopPropagation();
                             this.props.onNextPicture(this.props.PictureClick,this.props.images);
                         }}>
                        <div className={style.ArrowWrapper }>
                            <div className={style.RightArrow}>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        )
    }
};


const mapStateToProps = (state, ownProps) => ({
    PictureClick : state.PictureClick,
});

const mapDispatchToProps =(dispatch)=>({
   onClose:()=>{
       dispatch(closeImage())
   },

   onNextPicture:(PictureClick,images)=>{

       for(let i =0; i<images.length; i++){

           if(images[i].id === Number(PictureClick.id ) && images[i+1]){
                dispatch(changeImage(images[i+1].id,images[i+1].url))
           }
        }
   },
   onPrewtPicture:(PictureClick,images)=>{
       for(let i =0; i<images.length; i++){

           if(images[i].id === Number(PictureClick.id ) && images[i-1]){
                dispatch(changeImage(images[i-1].id,images[i-1].url))
           }
        }
   }
});

export default connect(mapStateToProps,mapDispatchToProps)(ShowPicture)
