import React from "react";

function About(props) {
  const imageSrc = props.image || "https://via.placeholder.com/215";
  const aboutText = props.about;

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p> 
    </aside>
  );
}

export default About;