import { Card, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import React, { useContext } from "react";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import GroupIcon from "../../assets/icons/Group.svg";
import PatternIcon from "../../assets/icons/Group (1).svg";
import PeopleIcon from "../../assets/icons/Group (2).svg";
import LaptopIcon from "../../assets/icons/Group (3).svg";
import { UserContext } from "../../contexts/UserContext";

const Projects = () => {
  const { classes } = useStyles();
  const matches600 = useMediaQuery("(min-width: 600px)");
  const {translate}=useContext(UserContext)
  return (
    <Card withBorder className={classes.projects} p={"xl"}>
      {/* <Flex justify={"space-evenly"}> */}
      <div className={classes.projectsDiv}>
        <Image src={GroupIcon} width={200} height={70} fit="contain" />
        <Title color="white" size={"50px"}>
          04
        </Title>
        <Text color="white" size={"xl"}>
          {translate("Years of Operations")}
        </Text>
      </div>
      <div className={classes.projectsDiv}>
        <Image src={PatternIcon} width={200} height={70} fit="contain" />
        <Title color="white" size={"50px"}>
          04
        </Title>
        <Text color="white" size={"xl"}>
          {translate("Completed Projects")}
        </Text>
      </div>
      <div className={classes.projectsDiv}>
        <Image src={PeopleIcon} width={200} height={70} fit="contain" />
        <Title color="white" size={"50px"}>
          04
        </Title>
        <Text color="white" size={"xl"}>{translate("Loyal Clients")}</Text>
      </div>
      <div className={classes.projectsDiv}>
        <Image src={LaptopIcon} width={200} height={70} fit="contain" />
        <Title color="white" size={"50px"}>
          04
        </Title>
        <Text color="white" size={"xl"}>
          {translate("New Projects")}
        </Text>
      </div>
      {/* </Flex> */}
    </Card>
  );
};

export default Projects;
