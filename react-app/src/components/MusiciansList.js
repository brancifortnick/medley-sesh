import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { deleteOneMusician } from "../store/musician";



function MusiciansList() {
  const [musicians, setMusicians] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/musicians");
      const responseData = await response.json();
      setMusicians(responseData.musicians);
    }
    fetchData();
  }, []);

  const musicianComponents = musicians.map((musician) => {
    return (
      <div key={musician.id}>
        <NavLink to={`/musicians/${musician.id}`}>{musician.musician_name}</NavLink>
      </div>
    );
  });

  return (
    <>
      <h1>Musicians Data: </h1>
      <ul>{musicianComponents}</ul>
    </>
  );
}

export default MusiciansList;
