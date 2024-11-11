import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";

const TimeLines = () => {
  return (
    <Timeline position="alternate" style={{ padding: "5rem" }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="h8"
          color="white"
        >
          Study at University of San Diego
          <br /> Major in Math and Computer Science
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            2017-2021
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="h8"
          color="white"
        >
          Work at Schiller Medical
          <br /> Software Engineer Developer
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography color="green" variant="h6" component="span">
            2021-2022
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="h8"
          color="white"
        >
          Study at Northeastern University
          <br /> Major in Computer Science
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="secondary">
            2022-2024
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="h8"
          color="white"
        >
          Work at Accelbyte
          <br /> Software Developer Intern
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="warning"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography color="red" variant="h6" component="span">
            2024
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="h6"
          color="white"
        >
          To Be Continued...
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography color="primary" variant="h6" component="span">
            Future
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLines;
