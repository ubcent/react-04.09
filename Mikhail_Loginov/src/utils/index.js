export default function getItemById(items, id) {
  let item = {};
  items.forEach(currItem => {
    if (currItem._id === id) {
      item = currItem;
    }
  });
  return item;
}

export function getCommentsByPostId(comments, postId) {
  let postComments = [];
    comments.forEach(comment => {
      if (comment.postId === postId) {
        postComments.push(comment);
      }
    });
  return postComments;
}