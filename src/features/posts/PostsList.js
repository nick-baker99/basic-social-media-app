import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

import React from 'react'
import PostDate from "./PostDate";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(post => (
    <article key={post.id} className="post">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="post-by">
        <PostAuthor userId={post.user} />
      </p>
      <p className="date">
        <PostDate timestamp={post.date} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;