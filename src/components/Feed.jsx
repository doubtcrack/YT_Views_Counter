import { Box, Stack, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import { Sidebar, Videos } from "./";
// import { APIService } from "../utils/APIService";

const Feed = () => {
  // const [selectedCategory, setselectedCategory] = useState("New");
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   APIService(`search?part=snippet&q=${selectedCategory}`).then((data) => {
  //     setVideos(data.items);
  //   });
  // }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* //   <Box
    //     sx={{
    //       height: { sx: "auto", md: "92vh" },
    //       overflow: "auto",
    //       borderRight: "1px solid #3d3d3d",
    //       px: { sx: 0, md: 2 },
    //     }}
    //   >
    //     <Sidebar
    //       selectedCategory={selectedCategory}
    //       setselectedCategory={setselectedCategory}
    //     />
    //   </Box> */}

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        {/* <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Video</span>
        </Typography> */}

        {/* <Videos videos={videos} /> */}
      </Box>
    </Stack>
  );
};

export default Feed;
