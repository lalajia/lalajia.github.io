import React from "react";
import SingleProject from "./SingleProject";
import ProjectDatas from "./ProjectDatas.js";

import "../styles/ProjectDetails.css";

const ProjectDetails = () => {
  return (
    <div className="projects">
      <div className="projectheading"> Web Related Projects</div>
      <div className="projectcontainer">
        {ProjectDatas.slice(0, 2).map((val, ind) => {
          return (
            <SingleProject
              key={ind}
              img={val.img}
              embedvideo={val.embedvideo}
              title={val.title}
              techs={val.techs}
              text={val.text}
              prototype={val.prototype}
              video={val.video}
              source={val.source}
            />
          );
        })}

        {/* <div className="first-version">
          <div className="details">
            <img src={pj1} alt="sunflower" />
            <h4>Project Sunflower</h4>
            <div className="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium magni doloribus asperiores animi, obcaecati quos natus
              perferendis eligendi nesciunt quisquam impedit autem culpa error
              molestias vitae dicta tempora, consequatur quod?
            </div>
            <div className="btns">
              <div className="btn">
                <Link to="https://www.figma.com/file/spQrnQjCkC8aJvCrcoMfSm/Sunflower?type=design&node-id=207%3A88&mode=design&t=lEyhEmtIT8Z6KfsC-1">
                  <button className="btn">Check Prototype</button>
                </Link>
                <Link to="https://youtu.be/qjJsyrPawF8">
                  <button className="btn">Check Video</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="details">
            <img src={pj2} alt="diabeatit" />
            <h4>Project Diabeatit</h4>
            <div className="project-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              rem doloribus enim, fuga magnam neque minus quas modi odio
              sapiente, officia quia. Unde ullam quae excepturi, voluptatibus
              nihil quam rerum?
            </div>
            <div className="btns">
              <div className="btn">
                <Link to="https://www.figma.com/proto/2hCVxqgFyPg2jb1xfutOto/diabeatit-wi21?node-id=435-4662&starting-point-node-id=435%3A4662&mode=design&t=3WgBzwph8cadJTu7-1">
                  <button className="btn">Check Prototype</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="details">
            <img src={pj2} alt="blog" />
            <h4>Blog Website</h4>
            <div className="project-details">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              ullam perspiciatis nisi laudantium a molestiae obcaecati excepturi
              cum ab quis iste, quibusdam reprehenderit enim sapiente adipisci
              quidem dignissimos? Saepe, hic.
            </div>
            <div className="btns">
              <div className="btn">
                <Link to="/project">
                  <button className="btn">Working on it</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="projectheading"> Game Projects</div>
      <div className="projectcontainer">
        {ProjectDatas.slice(2, 4).map((val, ind) => {
          return (
            <SingleProject
              key={ind}
              img={val.img}
              embedvideo={val.embedvideo}
              title={val.title}
              techs={val.techs}
              text={val.text}
              prototype={val.prototype}
              video={val.video}
              source={val.source}
            />
          );
        })}
      </div>

      <div className="projectheading"> Others</div>
      <div className="projectcontainer">
        {ProjectDatas.slice(4).map((val, ind) => {
          return (
            <SingleProject
              key={ind}
              img={val.img}
              embedvideo={val.embedvideo}
              title={val.title}
              techs={val.techs}
              text={val.text}
              prototype={val.prototype}
              video={val.video}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
