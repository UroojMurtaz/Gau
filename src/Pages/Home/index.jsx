import { Flex, Text, Title } from "@mantine/core";
import { ChevronsRight } from "tabler-icons-react";
import { Service } from "../General/Service";
import AboutUs from "./AboutUs";
import Carasoul from "./Carasole";
import Donation from "./Donation";
import routeNames from "../../routes/routeNames";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import Partner from "./Partner";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import { useStyles } from "./styles";
import s1 from "../../assets/icons/s1.png";
import s2 from "../../assets/icons/s2.png";
import s3 from "../../assets/icons/s3.png";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const index = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { translate } = useContext(UserContext);
  const data = [
    {
      image: s1,
      title: "Collect Fund For Water & Food",
      des: "We Providing Life's Essentials: Help us Collect Funds for Water and Food to Save Lives",
      rating: "4.8",
      work: "Help more than 50000 individuals",
      branches: "15",
    },
    {
      image: s2,
      title: "Collect Fund For Medical",
      des: "Support our Fundraising Campaign to Provide Access to Quality Medical Facilities",
      rating: "4.8",
      work: "Provide education to more than 35000 childs",
      branches: "15",
    },
    {
      image: s3,
      title: "Collect Fund For Shelter",
      des: "Contribute to our Fundraising Drive and Help Provide Shelter for the Homeless and Vulnerable",
      rating: "4.8",
      work: "Our NGO shelters over 1,000 families",
      branches: "15",
    },
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Carasoul
        carouselImages={[{ src: "img1" }, { src: "img2" }, { src: "img3" }]}
      />
      {/* <Container w={"100%"} bg={"red"}> */}
      <Title align="center" size={"40px"} mt="xl">
        {translate("Our Services")}
      </Title>
      <Flex
        justify={"flex-end"}
        m={"md"}
       
        className={classes.more}
        onClick={() => navigate(routeNames.general.services)}
      >
        <Text color="#327BBF" fw={"bold"}>
          {translate("Learn More")}
        </Text>
        <ChevronsRight color="#327BBF" />
      </Flex>
      <Flex
        align={"center"}
        justify="space-between"
        m={"md"}
        p={"lg"}
        direction={matches600 ? "row" : "column"}
        gap={"sm"}
      >
        {data.map((item, index) => (
          <Service data={item} key={index} />
        ))}
      </Flex>
      <AboutUs />
      <Donation />
      <Partner />
      <Projects />
      <Testimonials
        carouselImages={[{ src: "img1" }, { src: "img2" }, { src: "img3" }]}
      />
    </>
  );
};

export default index;
