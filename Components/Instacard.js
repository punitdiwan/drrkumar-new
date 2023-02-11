import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Instacard = () => {
  return (
    <>
      <div
        className="insta-card"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "3rem",
          marginBottom: "2rem",
        }}
      >
        <InstagramEmbed
          url="https://www.instagram.com/tv/CfOXH88JvzN/?utm_source=ig_web_copy_link"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/tv/CfOXH88JvzN/?utm_source=ig_web_copy_link"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/tv/CfOXH88JvzN/?utm_source=ig_web_copy_link"
          width={328}
        />
      </div>
    </>
  );
};

export default Instacard;
