import React from "react";
import StartingBlock from "./homeComponents/StartingBlock";
import sumWoman from "../../assets/img/sumWoman.png";
import sumMen from "../../assets/img/sumMen.png";
import Statistics from "./homeComponents/Statistics";
import Btn from "../../components/UI/btn";
import Mentors from "./homeComponents/MentorsBlock";
import Students from "./homeComponents/StudentsBlock";
import Questions from "./homeComponents/Questions";
import Footer from "../../components/footer";
import Header from "../../components/header/Header";


const HomePage = () => {
  const style = {
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  return (
    <>
      <Header/>
      <StartingBlock
        title="Are You Ready To Learn Something Great?"
        text="Not all mentors are created equal. The best mentors share some Qualities. You’ll want to look for these attributes"
        btn={<Btn to={"/registration"} children="Зарегистрироваться" />}
        img={sumWoman}
        contStyle={{
          height: "690px",
          width: "500px",
        }}
        imgStyle={{ height: "690px" }}
        id="start"
      />
      <Statistics />
      <StartingBlock
        title="Learn Anytime Anywhare"
        text=" Not all mentors are created equal. The best mentors share some
            important Qualities. You’ll want to look for these attributes in
            anyone you’re thinking About building a mentor-mentee relationship
            with. And if you’re looking to be a better mentor yourself, these
            qualities are worth noting."
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
        id="about"
      />
      <Mentors />
      {/* <Students /> */}
      <Questions />
      <Footer />
    </>
  );
};

export default HomePage;
