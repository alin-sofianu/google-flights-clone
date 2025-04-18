import dayjs from "dayjs";
import { formatCO2, formatTime, stopsNumber } from "../../utils/formatters";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Divider from "@mui/material/Divider";

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function FlightsResults({ flights }) {
  return (
    <div>
      {!flights ? (
        <Typography variant="subtitle2" sx={{ mb: 4 }}>
          No flights or API free limit exceeded
        </Typography>
      ) : null}

      <Typography variant="h6" sx={{ mt: 10 }}>
        Top flights
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 4 }}>
        Ranked based on price and convenience. Prices include required taxes +
        fees for 1 adult. Optional charges and bag fees may apply. Passenger
        assistance info.
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 4 }}>
        No flights or API free limit exceeded!
      </Typography>
      <Paper>
        {flights.map((flight) => {
          let totalDuration = 0;
          for (let i = 0; i < flight.legs.length; i++) {
            totalDuration += flight.legs[i].durationInMinutes;
          }

          const lastLeg = flight.legs.length - 1;
          const logoUrl = flight.legs[0].carriers.marketing[0].logoUrl;
          return (
            <Accordion key={flight.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "20%" }}
                >
                  <Box sx={{ m: 2 }}>
                    <img
                      src={logoUrl}
                      width={35}
                      height={35}
                      alt="air company logo"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography variant="subtitle1">
                        {dayjs(flight.legs[0].departure).format("hh:mm A")} -
                      </Typography>
                      <Typography variant="subtitle1">
                        {dayjs(flight.legs[lastLeg].arrival).format("hh:mm A")}
                      </Typography>
                    </Box>
                    <Typography>
                      {flight.legs[0].carriers.marketing[0].name}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ width: "20%", textAlign: "center" }}>
                  <Typography>{formatTime(totalDuration)}</Typography>
                  <Typography>
                    {flight.legs[0].destination.displayCode}-
                    {flight.legs[lastLeg].destination.displayCode}
                  </Typography>
                </Box>

                <Box sx={{ width: "20%", textAlign: "center" }}>
                  <Typography>{stopsNumber(flight.legs.length)}</Typography>
                </Box>

                <Box sx={{ width: "20%", textAlign: "center" }}>
                  <Typography>
                    {formatCO2(flight.eco?.ecoContenderDelta)}
                  </Typography>
                </Box>

                <Box sx={{ width: "20%", textAlign: "center" }}>
                  <Typography>{flight.price.formatted}</Typography>
                </Box>
              </AccordionSummary>

              {flight.legs.map((leg) => (
                <AccordionDetails
                  key={leg.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Timeline
                    sx={{
                      [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                      },
                    }}
                  >
                    <TimelineItem>
                      <TimelineOppositeContent />
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box
                          sx={{ display: "flex", alignItems: "left", gap: 2 }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {dayjs(leg.departure).format("hh:mm A")}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {leg.origin.name}({leg.origin.displayCode})
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ my: 1 }}>
                          Travel time: {formatTime(leg.durationInMinutes)}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent />
                      <TimelineSeparator>
                        <TimelineDot />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box
                          sx={{ display: "flex", alignItems: "left", gap: 2 }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {dayjs(leg.arrival).format("hh:mm A")}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {leg.destination.name}({leg.destination.displayCode}
                            )
                          </Typography>
                        </Box>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                  <Divider />
                </AccordionDetails>
              ))}
            </Accordion>
          );
        })}
      </Paper>
    </div>
  );
}

export default FlightsResults;
