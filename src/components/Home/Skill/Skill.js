import React from "react";
import Progress from "../Progress/Progress";
import "./Skill.scss";
import image from "../../../img/download1.jpg";
import image1 from "../../../img/node.jpg";
const Skill = () => {
  const Pro = [
    {
      name: "React Js",
      design: "88%",
      now: 88,
      id: 1,
    },
    {
      name: "Javascript",
      design: "80%",
      now: 80,
      id: 2,
    },
    {
      name: "Node Js",
      design: "75%",
      now: 75,
      id: 3,
    },
    {
      name: "HTML5",
      design: "95%",
      now: 95,
      id: 8,
    },
    {
      name: "CSS3",
      design: "85%",
      now: 85,
      id: 15,
    },
    {
      name: "Bootstrap",
      design: "92%",
      now: 92,
      id: 4,
    },
    {
      name: "mongoDB",
      design: "85%",
      now: 85,
      id: 5,
    },
    {
      name: "Firebase",
      design: "80%",
      now: 80,
      id: 9,
    },
  ];

  return (
    <div className="skill">
      <div className="container">
        <h1 className="text-center pt-3 pb-5" id="pricing">
          My Bio
        </h1>
        <div className="row">
          <div className="col-md-6   ">
            <div className="row menu-item align-items-center justify-content-center text-center">
              <div className="col-md-12">
                <div>
                  <img className="image" src={image} alt="" />
                </div>
              </div>
            </div>
            <div className="row menu-item align-items-center justify-content-center">
              <div className="col-md-12">
                <div>
                  <img className="image1" src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h2>Summary</h2>
              <p>
                Good to see you here :) <br /> I am Rubel Ahmed and I'm a young
                web developer with almost 2 years of experience as a Frontend
                Developer. I am self-motivated, energetic, enthusiastic, and
                ever ready to learn new things. I am confident to ensure the
                highest level of professionalism and commitment to my job.
              </p>
            </div>
            <div>
              <h2 className="">Skills</h2>
              {Pro.map((pd) => (
                <Progress key={pd.id} data={pd}></Progress>
              ))}
              <a
                href="https://drive.google.com/file/d/1HJTs9NpRwdYKcgRv4xA5tgZ1PCpo1oPB/view"
                target="_blank"
                rel="noreferrer"
                className="btn  my-3 text-light"
              >
                Resume Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
