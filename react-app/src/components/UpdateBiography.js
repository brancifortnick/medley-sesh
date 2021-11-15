import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBiography, getOneMusician } from "../store/musician";
import { useHistory } from "react-router-dom";
import { Modal } from "../context/Modal";

const UpdateBiography = ({ musicianBiography, musicianId }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [biography, setBiography] = useState("");
  const [showModal, setModal] = useState(false);

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("biography", biography);
    dispatch(updateBiography(formData, musicianId));
    setModal(false);
    // history.push('/musicians')
  };

  useEffect(() => {
    dispatch(getOneMusician(parseInt(musicianId)));
  }, [dispatch, musicianId]);

  return (
    <>
      <button id="biography-edit" onClick={() => setModal(true)}>
        Edit your biography
      </button>
      {showModal && (
        <Modal onClose={() => setModal(false)}>
          <form onSubmit={onSubmit}>
            <label id="biography-form">
              Musician Biography
              <textarea
                name="biography"
                placeholder={musicianBiography}
                onChange={(e) => setBiography(e.target.value)}
                value={biography}
              />
            </label>
            <button type="submit" id="update-biography-submit">
              Submit your new biography
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
export default UpdateBiography;
