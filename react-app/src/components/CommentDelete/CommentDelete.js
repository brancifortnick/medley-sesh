import React, {useState, useEffect} from 'react';
import { useDispatch, useDispatch } from 'react-redux';
import { getAllComments } from '../../store/comment';


const CommentDelete = ({comment}) => {

    const dispatch = useDispatch();
    const {id} = useParams();

    let song_id = comment.id

    const commentDelete = async (e) => {
        e.preventDefault();
        dispatch(deleteAComment(song_id))
    }

useEffect(()=> {
    dispatch(getAllComments(id));
},[dispatch, id])

return (

    <div>

    </div>
)
};
export default CommentDelete;
