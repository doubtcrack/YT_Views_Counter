import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Videos } from "./";
import { APIService } from "../utils/APIService";
import { useParams } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setvideoDetail] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    APIService(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
    APIService(`videos?id=${searchTerm}`).then((data) =>
      setvideoDetail(data.items[0])
    );
  }, []);
  if (!videoDetail?.statistics) return "Loading...";
  const {
    statistics: { viewCount },
  } = videoDetail;

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
      <Typography
        variant="h4"
        color="yellow"
        fontSize="64"
        fontWeight="bold"
        marginTop="1rem"
        textAlign="center"
        sx={{ opacity: 0.7 }}
      >
        <RemoveRedEyeIcon mr={2} color="white" />
        {parseInt(viewCount).toLocaleString()} Views
      </Typography>
    </Box>
  );
};

export default SearchFeed;
