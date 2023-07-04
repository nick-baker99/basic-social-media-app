import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmojis = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤',
  rocket: '🚀',
  coffee: '☕'
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="react-btn"
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div className="reactions">{reactionButtons}</div>
}

export default ReactionButtons