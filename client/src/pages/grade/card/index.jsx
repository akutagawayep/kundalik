import React from "react";
import { useEffect } from "react";
import { homeworksInstance } from "../../../api/instances";
import { addUserHomework } from "../../../api/userAPI";

const CardItem = ({ whose, score, link, homework }) => {
  const grading = async (score) => {
    const request = await homeworksInstance.put("/grading", {
      whose,
      link,
      score,
      homework,
    });
    console.log(request);
    window.location.reload();
  };

  return (
    <div>
      {whose}
      {score}
      <a onClick={() => grading(prompt())}>Grade</a>
    </div>
  );
};

export default CardItem;
