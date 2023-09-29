import { Container, Flex, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import services from "../../assets/services.svg";
import education from "../../assets/education.svg";
import shelter from "../../assets/shelter.svg";
import surgery from "../../assets/surgery.svg";
import food from "../../assets/food.svg";
import health from "../../assets/health.svg";
import funding from "../../assets/funding.svg";
import { Service } from "../General/Service";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import s1 from "../../assets/icons/s1.png";
import s2 from "../../assets/icons/s2.png";
import s3 from "../../assets/icons/s3.png";
const Services = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
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
          backgroundImage: `url(${services})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          position: "relative",
          filter: "brightness(0.8)",
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
          zIndex={5}
          order={1}
          pos={"absolute"}
          top={"50%"}
          left={"40%"}
          color="white"
          style={{ borderBottom: "2px solid white" }}
        >
          {translate("Services")}
        </Title>
      </Container>
      <Flex
        gap={"xl"}
        direction={!matches600 ? "column" : "row"}
        justify={"space-between"}
        w="85%"
        m="auto"
        align={"flex-start"}
        mb="50px"
      >
        <video
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          autoPlay
          muted
          loop
          width={matches600 ? "590rem" : "100%"}
          height={!matches600 ? "200px" : "400rem"}
        />
        <Stack spacing={"0px"} w={matches600 ? "45%" : "100%"}>
          <Text mt="lg" color="green">
            {translate("WE PROVIDE")}
          </Text>
          <Title order={1} mt="0px">
            {translate("Transforming Lives, One Act of Kindness at a Time")}
          </Title>
          <Text>
            {translate(
              "Building a network of compassion, resilience, and sustainable solutions to uplift vulnerable communities and promote lasting positive change. Dedicated to empowering individuals, bridging divides, and building a world where everyone has equal opportunities to thrive."
            )}
          </Text>
          <SimpleGrid cols={2} mt="xl">
            <Flex align={"center"} gap="md">
              <img src={education} />
              <Text>{translate("Education")}</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={surgery} />
              <Text>{translate("Surgery")}</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={health} />
              <Text>{translate("Health")}</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={food} />
              <Text>{translate("Food")}</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={shelter} />
              <Text>{translate("Shelter")}</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={funding} />
              <Text>{translate("Funding")}</Text>
            </Flex>
          </SimpleGrid>
        </Stack>
      </Flex>
      <Flex
        align={"center"}
        justify="center"
        m={"xl"}
        direction={matches600 ? "row" : "column"}
        gap={"sm"}
      >
        {data.map((item, index) => (
          <Service data={item} key={index} />
        ))}
      </Flex>
    </>
  );
};
export default Services;
