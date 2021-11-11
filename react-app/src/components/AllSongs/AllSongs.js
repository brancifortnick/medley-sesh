import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getMusiciansTracks} from '../../store/song';


const AllSongs = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const songs = useSelector(state=> Object.values(state.songs));


    useEffect(()=> {
        dispatch(getMusiciansTracks())
    },[dispatch])


    return (
        <div>
            {songs.map((song)=> (
                <div key={song.id} className='song-id'></div>
                // <Link to={}>
                // </Link>

            )
        )}
        </div>
    );
};
export default AllSongs;
