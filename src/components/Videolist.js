import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { popularVideosApi } from "../utils/constants";
import VideoCard from "./VideoCard";

const Videolist = () => {
  const [popularVideos, setpopularVideos] = useState([]);

  const fetchVideos = async () => {
    const response = await fetch(popularVideosApi);
    const data = await response.json();
    setpopularVideos(data.items);
    console.log(data.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="videolist flex flex-wrap p-2 justify-center ">
      {popularVideos.map((video) => {
        return (
          <Link
            to={"/watch?v=" + video.id}
            key={video.id}
            className="my-2 mr-4"
          >
            <VideoCard video={video} key={video.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videolist;
