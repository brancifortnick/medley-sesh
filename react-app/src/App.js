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
import MusicianRefactor from "./components/MusicianRefactor";
import MusiciansListRefactor from "./components/MusiciansListReFactor";
import MusicianFormThree from "./components/MusicianFormThree";
import LandingPage from './components/LandingPage/LandingPage';



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

        <ProtectedRoute path="/musicians" exact={true}>
          <MusiciansListRefactor />
        </ProtectedRoute>

        <ProtectedRoute path="/musicians/:musicianId" exact={true}>
          <MusicianRefactor />
        </ProtectedRoute>

        <ProtectedRoute path="/" exact={true}>
          <LandingPage />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
