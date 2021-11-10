import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOneMusician, deleteOneMusician } from "../store/musician";

const DeleteMusician = ({ musicianId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteOneMusician(Number(musicianId)));
    history.push("/musicians");
  };

//   useEffect(() => {
//     dispatch(getOneMusician(Number(musicianId)));
//   }, [dispatch, musicianId]);

  return (
    <div id="delete-musician-div">
      <button onClick={onSubmit} className="delete-btn">
        Delete Musician
      </button>
    </div>
  );
};


export default DeleteMusician;
