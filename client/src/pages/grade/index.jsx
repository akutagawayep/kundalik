import React, { useState } from "react";
import { useEffect } from "react";
import { homeworksInstance } from "../../api/instances";
import CardItem from "./card";

const GradePage = () => {
  const [homeworks, setHomeworks] = useState([]);

  const getHomeworks = async () => {
    const res = await homeworksInstance.get("/students");
    setHomeworks(res.data);
  };

  useEffect(() => {
    getHomeworks();
  }, []);

  useEffect(() => {
    console.log(homeworks);
  }, [homeworks]);

  return (
    <div style={{ padding: 100 }}>
      {homeworks.map((el, i) => (
        <CardItem
          key={i}
          whose={el.whose}
          link={el.link}
          homework={el.homework}
          score={el.score}
        />
      ))}
    </div>
  );
};

export default GradePage;
