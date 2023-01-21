import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import { homeworksInstance } from "../../api/instances";
import CardItem from "./card";
import s from "./gradePage.module.scss";
import Loader from "../../components/UI/loader";

const GradePage = () => {
  const [homeworks, setHomeworks] = useState([]);
  const [loadering, setLoader] = useState(false);
  const [query, setQuery] = useState("");

  const getHomeworks = async () => {
    setLoader(true);
    const res = await homeworksInstance.get("/students");
    setHomeworks(res.data);
    setLoader(false);
  };

  useEffect(() => {
    getHomeworks();
  }, []);

  const sortedHW = useMemo(() => {
    return homeworks.filter((name) =>
      name.whose.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, homeworks]);

  const onDisplay = () => {
    return sortedHW.length !== 0 ? (
      sortedHW.map((el, i) => (
        <CardItem
          key={i}
          whose={el.whose}
          link={el.link}
          homework={el.homework}
          score={el.score}
          id={el.id}
        />
      ))
    ) : (
      <h2>Ученик с таким именем не сдавал работу</h2>
    );
  };

  return (
    <div className={s.root}>
      <input
        placeholder="поиск..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loadering ? <Loader /> : onDisplay()}
    </div>
  );
};

export default GradePage;
