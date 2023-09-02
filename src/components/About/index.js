import TimelineContent from "@mui/lab/TimelineContent/TimelineContent";
import React from "react";
import { TimeLineData } from "../../data/constants";

const About = () => {
  return (
    <div>
      <TimelineContent>
        {TimeLineData?.year && (
          <>
            {TimeLineData?.map((year, index) => (
              <span>{year}</span>
            ))}
          </>
        )}
      </TimelineContent>
    </div>
  );
};

export default About;
