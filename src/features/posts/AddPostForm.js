import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  const onAuthChange = e => setUserId(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
      );

      setTitle('');
      setContent('');
      setUserId('');
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="posts-form">
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input 
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author: </label>
        <select 
          id="postAuthor" 
          value={userId} 
          onChange={onAuthChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <input 
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
      </form>
      <button 
        type="button"
        onClick={onSavePostClicked}
        disabled={!canSave}
      >Save Post</button>
    </section>
  );
}

export default AddPostForm