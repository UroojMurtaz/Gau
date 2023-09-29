import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  top: {
    backgroundImage: new URL(`../../assets/services.svg`, import.meta.url).href,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "red",
    overflow: "hidden",
    height: "400px",
    // position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundColor: "rgb(0,0,0, 0.2)",
    },
  },
}));
