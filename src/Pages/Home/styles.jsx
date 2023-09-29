import { createStyles } from "@mantine/core";
import landingBg from "../../assets/landingBg.svg";
import g2 from "../../assets/g2.svg";
import footer from "../../assets/landingFooter.svg";
import donation from "../../assets/icons/Component1.svg";
import partner from "../../assets/icons/partner.png";

export const useStyles = createStyles((theme) => ({
  donation: {
    backgroundImage: `url(${donation})`,
    height: "330px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  projects: {
    backgroundImage: `url(${donation})`,
    height: "300px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-evenly",

    [`@media (max-width: 600px)`]: {
      flexDirection: "column",
      height: "auto",
      gap: "15px",

      // position: "absolute",
      // top: "80px",
      // padding: "50px 20px",
      // borderRadius: "10px",
      // width: "100vw",
      // right: 0,
      // backgroundColor: "white",
    },
  },
  projectsDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "5px",
    border: "2px solid white",
    padding: "15px",
  },
  more: {
    cursor: "pointer",
  },
}));
