import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useMediaQuery } from "@mantine/hooks";
import { Star } from "tabler-icons-react";
import star from "../../assets/icons/star.png";
import profile from "../../assets/icons/profile.png";

export const Service = ({ data }) => {
  const { classes } = useStyles();
  const { translate } = useContext(UserContext);
  const isMobile = useMediaQuery("(min-width: 600px)");
  return (
      <Card
        shadow="sm"
        padding="lg"
        // radius="md"
        withBorder
        w={isMobile?"400px":"320px"}
        h={isMobile?"450px":"460px"}
        // style={{
        //   maxHeight:"fit-content"
        // }}
        
      >
        <Image src={data?.image} width={"100%"} alt="Norway" />

        {/* <h3>{translate(data?.title)}</h3> */}
        <Text size={isMobile ? "18px" : "16px"} fw={"bold"} mb={"md"} mt={"sm"}>
        {translate(data?.title)}
        </Text>
        <Text size={isMobile ? "14px" : "12px"} mt={"-10px"}>
          {translate(data?.des)}
        </Text>

        <Group mt={"md"}>
          <img src={star} height={"20px"} width={"20px"} />
          <Text size={"14px"} color="dimmed">
            {`${data?.rating} (100+ reviews)`}
          </Text>
        </Group>
        <Group spacing={"md"}>
          <img src={profile} height={"20px"} width={"20px"} />

          <Text size={"14px"} color="dimmed">
            {translate(data?.work)}
          </Text>
        </Group>
        <Group>
          <Star size={18} strokeWidth={2} color={"#d2ca79"} />
          <Text size={"14px"} color="dimmed">
            {`${data?.branches} ${translate("Branches")}`}
          </Text>
        </Group>
      </Card>
    // </Container>
  );
};
