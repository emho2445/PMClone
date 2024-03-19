import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/profile/posts">Posts</Link>
        <Link to="/profile/comments">Comments</Link>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />}>
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <Outlet />
    </div>
  );
}

function Posts() {
  return <h3>Posts</h3>;
}

function Comments() {
  return <h3>Comments</h3>;
}
