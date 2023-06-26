import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ReviewForm() {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_REVIEW",
            payload: {
              id: 1,
              content,
            },
          });
        }}
      >
        <input
          type="text"
          name="cotent"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button>입력</button>
      </form>
    </div>
  );
}

export default ReviewForm;
