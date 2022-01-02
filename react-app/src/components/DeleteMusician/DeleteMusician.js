import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOneMusician, deleteOneMusician, getAllMusicians } from "../../store/musician";
import './DeleteMusician.css'


const DeleteMusician = ({ musicianId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteOneMusician(Number(musicianId)));
    history.push("/");
  };

  useEffect(() => {
    dispatch(getAllMusicians(Number(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <div id="delete-musician-div">
      <button onClick={onSubmit} id="delete-musician-btn">
        Delete Musician
      </button>
    </div>
  );
};


export default DeleteMusician;
