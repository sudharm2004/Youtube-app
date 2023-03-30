import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div
      className="video  box-border break-words shadow-lg border-2 border-gray-200 p-2 h-full"
      key={video.id}
    >
      <img
        className="  w-52 rounded"
        src={video.snippet.thumbnails.high.url}
        alt="video-thumbnail"
      />
      <ul className="w-52 break-words text-start  text-sm space-y-2">
        <li className="font-bold">
          {video.snippet.title.length > 70
            ? video.snippet.title.substring(0, 70) + "..."
            : video.snippet.title}
        </li>
        <li>{video.snippet.channelTitle}</li>
        <li>{video.statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
