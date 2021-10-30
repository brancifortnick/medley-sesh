import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

 const GetMusician = () => {


 const {musicianId} = useParams();

 useEffect(() => {
    if (!musicianId) {
      return;
    }
    (async () => {
      const res = await fetch(`/api/musicians/${musicianId}`);
      const musician = await res.json();
    //   setUserId(musician);
    })();
  }, [musicianId]);

  if (!musician) {
    return null;
  };

  return (
    <div>
        <ul>
          <li>Musician Id</li> {musicianId}
          <li>Musician Name</li> {musician_name}
          <li>Title</li> {title}
          <li>Biography</li>{biography}
          </ul>
    </div>
  );
};
export default GetMusician;
