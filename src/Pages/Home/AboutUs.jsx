import { Flex, Grid, Group, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { ChevronsRight } from "tabler-icons-react";
import videoBG from "../../assets/videoBG.svg";
import routeNames from "../../routes/routeNames";
import { useStyles } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const AboutUs = () => {
  const matches600 = useMediaQuery("(min-width :600px)");
  const { classes } = useStyles();
  const {translate}=useContext(UserContext)
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Grid
        mt={matches600 ? "xl" : "md"}
        p={matches600 ? "xl" : "md"}
        m="auto"
        w="90%"
      >
        <Grid.Col
          span={12}
          md={6}
          lg={5.5}
          pos={"relative"}
          style={{
            backgroundImage: `url(${videoBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          h={"390px"}
        >
          <video
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            autoPlay
            muted
            loop
            width={matches600 ? "450rem" : "00rem"}
            height={"400rem"}
            style={{ margin: "auto" }}
          />
        </Grid.Col>
        <Grid.Col span={12} md={6} lg={5} p={"xl"}>
          <Group spacing={"md"}>
            <Title align="center" size={"40px"}>
              {translate("About Us")}
            </Title>
            <Text align="justify" size={"lg"}>
              {translate("Welcome to our NGO dedicated to empowering the Gypsy community in Spain. We are passionate about promoting social inclusion,fighting discrimination, and improving the lives of Gypsy people across the country. Our organization is committed to promoting social inclusion, advocating for equal rights, and addressing the unique challenges faced by the Gypsy community. With a deep understanding of their cultural heritage and the barriers they encounter, we strive to empower Gypsy individuals and families by providing educational opportunities, access to healthcare, and social support.")}
            </Text>
            <Flex
              justify={"flex-end"}
              m={"md"}
              className={classes.more}
              onClick={() => navigate(routeNames.general.aboutUs)}
            >
              <Text color="#327BBF" fw={"bold"}>
                {translate("Learn More")}
              </Text>
              <ChevronsRight color="#327BBF" />
            </Flex>
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default AboutUs;
