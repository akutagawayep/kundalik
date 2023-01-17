import React from "react";
import StartingBlock from "./homeComponents/StartingBlock";
import s from "./homePage.module.scss";
import sumWoman from "./homeComponents/StartingBlock/img/sumWoman.png";
import sumMen from "../home/homeComponents/StartingBlock/img/sumMen.png";
import Statistics from "./homeComponents/Statistics";
import Btn from "../../components/UI/btn";
import Mentors from "./homeComponents/MentorsBlock";
import Students from "./homeComponents/StudentsBlock";

const HomePage = () => {
  const style = {
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  return (
    <div className={s.root}>
      <StartingBlock
        title="Are You Ready To Learn Something Great?"
        text="Not all mentors are created equal. The best mentors share some Qualities. You’ll want to look for these attributes"
        btn={<Btn bg={{ background: " #ff693a" }} text="Getting started ->" />}
        img={sumWoman}
        contStyle={{
          height: "690px",
          width: "500px",
        }}
        imgStyle={{ height: "690px" }}
        titleStyle={{
          fontWeight: "700",
          fontSize: "70px",
          lineHeight: "80px",
        }}
      />
      <Statistics />
      <StartingBlock
        title="Learn Anytime Anywhare"
        text=" Not all mentors are created equal. The best mentors share some
            important Qualities. You’ll want to look for these attributes in
            anyone you’re thinking About building a mentor-mentee relationship
            with. And if you’re looking to be a better mentor yourself, these
            qualities are worth noting.



            Not all mentors are created equal. The best mentors share some
            important Qualities. You’ll want to look for these attributes in
            anyone you’re thinking About building a mentor-mentee relationship
            with. And if you’re looking to be a better mentor yourself,"
        img={sumMen}
        style={style}
        contStyle={{
          height: "450px",
          width: "450px",
        }}
        imgStyle={{ height: "450px" }}
        titleStyle={{
          fontWeight: "700",
          fontSize: "60px",
          lineHeight: "60px",
        }}
      />
      <Mentors />
      <Students />
    </div>
  );
};

export default HomePage;
