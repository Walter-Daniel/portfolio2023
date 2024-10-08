import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Chip, Typography, useTheme, Grid } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import nextIMG from '/nextjs_icon.png'
export const Education = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      id="education"
      sx={{ minHeight: "100vh" }}
      direction="column"
      justifyContent="center"
    >
      <Grid item>
        <Typography
          variant="h2"
          color={theme.palette.primary.main}
          sx={{
            textTransform: "uppercase",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          EDUCACIÓN
        </Typography>
        <Timeline position="alternate" sx={{ margin: "2rem 0" }}>
          {/* HEDY SOFTWARE */}
          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="white"
              // maxWidth="100%"
            >
              <Chip
                label="03/2024 - Presente"
                variant="outlined"
                sx={{
                  height: "auto",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                size="small"
                className="chip-time"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary" variant="outlined">
                <img src={nextIMG} style={{ height: '24px' }}/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "24px", px: 2 }}>
              <Typography sx={{ fontWeight: "bold" }} component="span">
                Hedy Software
              </Typography>
              <Typography>Next.js 14 - Curso Intensivo</Typography>
            </TimelineContent>
          </TimelineItem>
          {/* TELECOM */}
          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              color="white"
              maxWidth="100%"
            >
              <Chip
                label="06/2023 - Presente"
                variant="outlined"
                sx={{
                  height: "auto",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                size="small"
                className="chip-time"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="warning" variant="outlined">
                <LightbulbIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography sx={{ fontWeight: "bold" }} component="span">
                Educación IT & Telecom
              </Typography>
              <Typography>Digitalers Node.js Developer</Typography>
            </TimelineContent>
          </TimelineItem>
           {/* TECNICATURA */}
           <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="white"
            >
              <Chip
                label="03/2023 - Presente"
                variant="outlined"
                sx={{
                  height: "auto",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                className="chip-time"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography sx={{ fontWeight: "bold" }} component="span">
                Programador Universitaro
              </Typography>
              <Typography>
                Facultad de Ciencias Exactas y Tecnología - UNT
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* INGLÉS */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="white"
            >
              <Chip
                label="03/2022 - Presente"
                variant="outlined"
                sx={{
                  height: "auto",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                className="chip-time"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary" variant="outlined">
                <MenuBookTwoToneIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography sx={{ fontWeight: "bold" }} component="span">
                Instituto Rush
              </Typography>
              <Typography>Intensivo 2 (nivel: A2)</Typography>
            </TimelineContent>
          </TimelineItem>
          {/* ROLLINGCODE */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="white"
            >
              <Chip
                label="10/2021 - 05/2022"
                variant="outlined"
                sx={{
                  height: "auto",
                  "& .MuiChip-label": {
                    display: "block",
                    whiteSpace: "normal",
                  },
                }}
                className="chip-time"
              />
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary" variant="outlined">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography sx={{ fontWeight: "bold" }} component="span">
                FullStack Web Developer (MERN)
              </Typography>
              <Typography>RollingCode School</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
};
