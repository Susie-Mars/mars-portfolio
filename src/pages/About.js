import React from "react";
import NavbarTwo from "../components/NavbarTwo";
import resume from "../images/susie.mars.resume.jan.2023.jpg";

const About = () => {
  return (
    <body className="about-bg">
      <NavbarTwo />
      <div className="d-flex justify-content-around m-2">
        <img src={resume} alt="resume" className="resume-image rounded"></img>
        <div className="about-info">
          <h1>About Me</h1>
          <p className="about-p">
            Hi, my name is Susie Mars and I'm a full stack developer based in
            Denver, CO. I spent the last ten years in the beauty and wellness
            industry, but have always had an interest in software and web
            development. Over the years, I often had ideas for apps/websites, or
            had ideas about how pre-existing ones could improve. When
            researching a career change two years ago, I quickly realized that I
            finally wanted to take the leap into software and web development.
          </p>
          <p className="about-p">
            I attended the Coding Dojo full stack software development program
            where I learned MERN, Python, and C#. I quickly fell in love with
            programming and loved how I was able to transfer my creative skills
            into creating beautiful and functional apps for people to use. As a
            lifelong puzzle lover, I also enjoyed the problem solving involved,
            and the rush of endorphins when something finally works.
          </p>
          <p className="about-p"></p>
        </div>
      </div>
    </body>
  );
};

export default About;
