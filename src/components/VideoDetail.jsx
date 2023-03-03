import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { APIService } from "../utils/APIService";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    APIService(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideoDetail(data.items[0])
    );
    APIService(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, []);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box justifyContent="center" alignItem="center" display="flex">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          sx={{
            width: "80%",
            position: "sticky",
            top: "86px",
          }}
        >
          <ReactPlayer
            width="100%"
            height="500px"
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              color: "#fff",
            }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
