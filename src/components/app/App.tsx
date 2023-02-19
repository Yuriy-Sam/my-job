import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import store from "../../store/Store";
import Login from "../login/Login";
import "./App.scss";

import { Provider } from "react-redux";
import Header from "../header/Header";
import Profile from "../profile/Profile";
import NewsList from "../newsList/NewsList";
import Main from "../main/Main";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          {/* <HashRouter> */}
          <div className="app">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/news" element={<NewsList />} />
                {JSON.parse(localStorage.getItem("auth")!) ? (
                  <Route path="/profile" element={<Profile />} />
                ) : (
                  <Route path="/auth" element={<Login />} />
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
          {/* </HashRouter> */}
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
