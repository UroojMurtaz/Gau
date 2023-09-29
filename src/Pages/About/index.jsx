import {
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import aboutus from "../../assets/icons/aboutUsHeader.png";
import Aboutus3 from "../../assets/icons/partner2.png";
import Aboutus1 from "../../assets/icons/au1.png";
import Aboutus2 from "../../assets/icons/au2.png";

import Projects from "../Home/Projects";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const About = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const { translate } = useContext(UserContext);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Container
        fluid
        p="0px"
        m="0px"
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          position: "relative",
        }}
        h={matches600 ? "500px" : "300px"}
        mb="xl"
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.2)",
          }}
        ></div>
        <Title
          order={1}
          pos={"absolute"}
          top={"50%"}
          left={"40%"}
          color="white"
          style={{ borderBottom: "2px solid white" }}
        >
          {translate("About Us")}
        </Title>
      </Container>
      <Container size={"xl"}>
        <Grid mt={"xl"} p={"xl"}>
          <Grid.Col span={12} md={6} lg={5}>
            {/* <Stack p={"xl"}> */}
            <Card
              shadow="md"
              padding="md"
              withBorder
              w={matches600 ? "30rem" : "18rem"}
              h={matches600 ? "29rem" : "16rem"}
            >
              <Image src={Aboutus1} height={425} width={450} alt="Norway" />
            </Card>
            {/* </Stack> */}
          </Grid.Col>
          <Grid.Col span={12} md={6} lg={6} p={"xl"}>
            <Stack>
              <Text size={"20px"} mb={"-20px"}>
                {translate("About us")}
              </Text>
              <Group>
                <Title size={"h2"}>{translate("Help is Our")} </Title>
                <Text size={35} color="green">
                  {" "}
                  {translate("Main Goal")}
                </Text>
              </Group>

              <Text fw={"bold"} fz={"lg"}>
                {translate(
                  `We are the dedicated Team of individuals passionate about making a positive impact in the lives of those in need`
                )}
              </Text>
              <Text align="justify" size={"lg"} color="dimmed">
                {translate(
                  "Our organization was founded with the belief that every person deserves a chance to thrive and live a fulfilling life"
                )}
                .
              </Text>
              <Text align="justify" size={"lg"} color="dimmed">
                {translate(
                  "Through our tireless efforts, we aim to address pressing social issues and provide essential support to vulnerable communities. By fostering a culture of compassion, empathy, and collaboration, we strive to create lasting change and empower individuals to overcome obstacles. Together, we are committed to building a brighter future, one act of kindness at a time. Join us in our mission and together let's make a difference that truly matters"
                )}
                .
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size={"xl"} mb={"xl"}>
        <Grid mt={"xl"} p={"xl"}>
          <Grid.Col span={12} md={6} lg={6.5} p={"xl"}>
            <Stack>
              <Title size={22} color="green" mb={"-12px"}>
                {translate("Our Mission")}
              </Title>
              <Text size={23} fw={"bolder"} mb={"-15px"}>
                {translate(
                  "We work around the globe to save lives, defeat poverty and achieve social justice"
                )}
                .
              </Text>
              <Text align="justify" size={"lg"} color="dimmed" mt={"md"}>
                {translate(
                  "Our mission at GAU is to create positive and lasting change in the world. We are dedicated to empowering individuals and communities, providing support, and fostering hope. Through our collaborative efforts, we strive to address pressing social, environmental, and economic challenges. Our mission is driven by the belief that every person deserves access to basic necessities, quality education, healthcare, and a safe environment. By working together, we aim to inspire compassion, amplify voices, and create sustainable solutions that uplift lives and build a brighter future for all. Together, we can make a meaningful impact and create a world where everyone has the opportunity to thrive"
                )}
                .
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={12} md={6} lg={5} ml={"xl"}>
            {/* <Stack p={"xl"}> */}
            <Card
              shadow="md"
              padding="md"
              withBorder
              w={matches600 ? "30rem" : "18rem"}
              h={matches600 ? "29rem" : "16rem"}
            >
              <Image src={Aboutus2} height={425} width={500} alt="Norway" />
            </Card>
            {/* </Stack> */}
          </Grid.Col>
        </Grid>
      </Container>
      <Projects />
      <Container size={"xl"} mt={"xl"}>
        <Grid mt={"xl"} p={"xl"}>
          <Grid.Col span={12} md={6} lg={5}>
            {/* <Stack p={"xl"}> */}
            <Card
              shadow="md"
              padding="md"
              withBorder
              w={matches600 ? "30rem" : "18rem"}
              h={matches600 ? "29rem" : "16rem"}
            >
              <Image src={Aboutus3} height={425} width={450} alt="Norway" />
            </Card>
            {/* </Stack> */}
          </Grid.Col>
          <Grid.Col span={12} md={6} lg={6} p={"xl"}>
            <Stack>
              <Text size={"20px"} mb={"-15px"}>
                {translate("How GAU help Gypsies")}
              </Text>
              <Group mb={"-10px"}>
                <Title>{translate("Our")} </Title>
                <Text size={35} color="green">
                  {" "}
                  {translate("Main Services")}
                </Text>
              </Group>

              <Text fw={"bold"} fz={"lg"}>
                "
                {translate(
                  "Empowering the Gypsy Community: Services that Transform Lives in Spain"
                )}
                "
              </Text>
              <Text align="justify" size={"lg"} color="dimmed">
                {translate(
                  "Our organization is driven by a commitment to breaking down barriers, fighting discrimination, and improving the lives of Gypsy individuals and families. With a deep understanding of their unique challenges and cultural heritage, we offer a range of services tailored to their specific needs"
                )}
                .
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default About;
