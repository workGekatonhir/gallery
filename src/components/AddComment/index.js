import React from 'react';
import style from './style.css';
import {addComment} from "../../actions";
import {connect} from "react-redux";

const AddComment =({onAddComment,packageId})=>{

    let input;

    return (
        <div className={style.wrapper }>

            <div className={" input-group "}>
                <input type="text" className={style.input+" form-control"} placeholder="Сообщение" ref={node => {input = node}}/>
                    <div className={"input-group-append"}>
                        <button className={ style.btn+" btn btn-outline-secondary"} type="button"
                            onClick={()=>{
                                if(input.value !==''){
                                    onAddComment(input.value,Number(packageId));
                                }
                                input.value='';
                            }}
                        >ОТПРАВИТЬ</button>
                    </div>
            </div>

        </div>
    );


};
const mapStateToProps = (state, ownProps) => ({
});


const mapDispatchToProps =(dispatch)=>({
    onAddComment:(text,id)=>{
        dispatch(addComment(text,id))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(AddComment)



