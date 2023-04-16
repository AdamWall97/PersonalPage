import React from "react";

const SkillRating = (props: {rate: number}) => {
  const fullStars = Math.floor(props.rate);
  const hasHalfStar = props.rate % 1 !== 0;
    return (
        <div style={{"fontSize":25}}>{
            [...Array(5)].map((value: null, index: number) => {
                if (index+1 <= fullStars) {
                    return <i className="bi-diamond-fill link-dark" id={index.toString()} ></i>
                }
                if (index === Math.floor(props.rate) && hasHalfStar) {
                    return <i className="bi-diamond-half link-dark " id={index.toString()}></i>
                }
                return <i className="bi-diamond link-dark" id={index.toString()}></i>
            })
        }
    </div>);

}
export default SkillRating;
