import React from "react";
import {connect} from "react-redux";
import style from './style.css';

const ShowComment = ({comments,id})=>{
    let a =  getSelectedComments(comments,id);

    return (
    <div  className={style.row+" row" }>
        {
            a.map(comment=>{
                return <div key={comment.id}><p><b>{comment.author} </b>: { comment.text}</p></div>
            })
        }

    </div>

    )

};

const getSelectedComments =(comments,id)=>{
    return comments.filter(comment=> comment.packageId === Number(id));
};


const mapStateToProps = (state, ownProps) => ({
    comments :state.comments
});

export default connect(mapStateToProps)(ShowComment)