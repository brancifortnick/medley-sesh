import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function MusiciansList() {
  const [musicians, setMusicians] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/musicians/");
      const responseData = await response.json();
      setMusicians(responseData.musicians);
    }
    fetchData();
  }, []);

  const musicianComponents = musicians.map((musician) => {
    return (
      <div key={musician.id}>
        <NavLink to={`/musicians/${musician.id}`}>{musician.musician_name}</NavLink>
        {/* <img src={musician.profile_img} alt=''></img> */}
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
