import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch} from "react-redux";
import { authenticate } from "./store/session";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
// import Musician from './components/Musician';
// import MusiciansList from "./components/MusiciansList";
// import MusicianForm from "./components/MusicianForm";
// import MusicianFormRefactor from "./components/AllMusicians/MusicianFormRefactor";
// import ImageUpload from "./components/ImageUpload";
// import UsersMusicians from "./components/UsersMusicians/UsersMusicians";
import MusicianRefactor from "./components/MusicianRefactor";
import MusiciansListRefactor from "./components/MusiciansListReFactor";
import MusicianFormThree from "./components/MusicianFormThree";
import LandingPage from './components/LandingPage/LandingPage';
import CommentCreate from "./components/CommentCreate/CommentCreate";
import UploadSong from "./components/UploadSong/UploadSong";
import CommentDisplay from "./components/CommentDisplay/CommentDisplay";


function App() {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>

        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>

        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>

        <ProtectedRoute path="/users/:userId/add-musician" exact={true}>
          <MusicianFormThree />
        </ProtectedRoute>

        {/* <ProtectedRoute path="/songs/new" exact={true}>
          <UploadSong />
        </ProtectedRoute> */}

        <ProtectedRoute path="/musicians" exact={true}>
          <MusiciansListRefactor />
        </ProtectedRoute>

        <ProtectedRoute path="/musicians/:musicianId" exact={true}>
          <MusicianRefactor />
          <CommentCreate />
          {/* <CommentDisplay /> */}
        </ProtectedRoute>
        {/*
        <ProtectedRoute path="/musicians/updateImage" exact={true}>
          <ImageUpload />
        </ProtectedRoute> */}

        <ProtectedRoute path="/" exact={true}>
          <LandingPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
