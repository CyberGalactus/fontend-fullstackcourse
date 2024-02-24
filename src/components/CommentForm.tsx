import { ActionFunctionArgs, useFetcher } from "react-router-dom";
// import { useRef } from "react";
import classes from './CommentForm.module.css';
import auth from "../lib/auth";
import { Post } from "../types";

export const action = async (args: ActionFunctionArgs) => {
  const { postId } = args.params;
  const formData = await args.request.formData();

  const response = await fetch(
    import.meta.env.VITE_BACKEND_URL + "/posts/" + postId + "/comments",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.getJWT(),
      },
      method: "POST",
      body: JSON.stringify({ commentBody: formData.get("body") }),
    }
  );

  if (!response.ok) {
    const { message } = await response.json();

    return { message };
  }

  const post = (await response.json()) as Post;

  return {
    comments: post.comments,
  };
};


const CommentForm = ({ postId }: { postId: string }) => {
  const fetcher = useFetcher({ key: "comment-form-" + postId });

    return (
        <div className={classes.commentForm}>
            <fetcher.Form method="post" action={`/posts/${postId}/comments`}>
                <div>
                <textarea
                    name="body"
                    id="body"
                    placeholder="Leave a comment"
                    required
                ></textarea>
                </div>
                <div>
                <button type="submit">Post comment</button>
                </div>
            </fetcher.Form>
        </div>
    );
};

export default CommentForm;