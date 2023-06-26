import React from "react";
import { useSelector } from "react-redux";

function ReviewList() {
  const reviews = useSelector((state) => state.reviews);
  console.log(reviews);

  return (
    <div>
      <h2>REVIEW</h2>
      <div>
        {reviews.id}
        {reviews.content}
      </div>
    </div>
  );
}

export default ReviewList;
