import React from "react";
import SkillRating from "./SkillRating";

const Skillcard = (props: {title: string, rating: number, text: string}) => {
  return (
    <div className="card bg-primary" style={{"height": "15rem"}}>
        <div className="card-body text-white">
            <h4 className="card-title">{props.title}</h4>
            <SkillRating rate={props.rating} />
            <p className="card-text mt-2 overflow-hidden">{props.text}</p>
        </div>
    </div>
  );
};

export default Skillcard;
