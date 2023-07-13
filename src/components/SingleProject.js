import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDatas.js";
import "../styles/ProjectDetails.css";

const SingleProject = (props) => {
  return (
    <div className="details">
      {props.img && <img src={props.img} alt="img" />}
      {!props.img && props.embedvideo && (
        <iframe
          height="315"
          src={props.embedvideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
      <h4>{props.title}</h4>
      <ul>
        {props.techs &&
          props.techs.map((tech, index) => <li key={index}>{tech}</li>)}
      </ul>
      <div className="project-details">{props.text}</div>
      <div className="btns">
        {props.prototype && (
          <Link to={props.prototype}>
            <button className="btn">Prototype</button>
          </Link>
        )}
        {props.video && (
          <Link to={props.video}>
            <button className="btn">Video</button>
          </Link>
        )}
        {props.source && (
          <Link to={props.source}>
            <button className="btn">Source</button>
          </Link>
        )}
      </div>
    </div>
  );
};

// second way
// const SingleProject = ({ img, title, text, prototype, video, source }) => {
//   return (
//     <div className="details">
//       <img src={img} alt="img" />
//       <h4>{title}</h4>
//       <div className="project-details">{text}</div>
//       <div className="btns">
//         {prototype && (
//           <Link to={prototype}>
//             <button className="btn">Check Prototype</button>
//           </Link>
//         )}
//         {video && (
//           <Link to={video}>
//             <button className="btn">Check Video</button>
//           </Link>
//         )}
//         {source && (
//           <Link to={source}>
//             <button className="btn">GitHub Source</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

export default SingleProject;
