import { RefObject, useRef } from "react";

import classes from "./NewCommentForm.module.css";

interface NewCommentFormProps {}
const NewCommentForm = (props: NewCommentFormProps) => {
  const commentTextRef = useRef() as RefObject<HTMLTextAreaElement>;

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
