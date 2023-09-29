import { Container, Divider, Flex, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext } from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandTwitter,
  Mail,
  MapPin,
  Phone,
} from "tabler-icons-react";
import { UserContext } from "../../contexts/UserContext";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import routeNames from "../../routes/routeNames";

export const LandingFooter = () => {
  const { classes } = useStyles();
  const { translate } = useContext(UserContext);
  const isMobile = useMediaQuery("(max-width: 820px)");
  return (
    <Container className={classes.footer} fluid>
      <Flex
        direction="column"
        align={"center"}
        gap={"md"}
        w={isMobile ? "100%" : "30%"}
      >
        <Flex gap={"lg"}>
          <Text>GAU</Text>
          <Divider orientation="vertical" />
          <BrandFacebook />
          <BrandTwitter />
          <BrandInstagram />
        </Flex>
        <Flex gap={"md"} align={"center"} className={classes.navigationBar}>
          <Link
            className={classes.link}
            to={routeNames.general.landing}
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            {translate("Home")}
          </Link>
          <Divider orientation="vertical" />
          <Link
            className={classes.link}
            to={routeNames.general.services}
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            {translate("Services")}
          </Link>
          <Divider orientation="vertical" />
          <Link
            className={classes.link}
            to={routeNames.general.aboutUs}
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            {translate("About Us")}
          </Link>
          <Divider orientation="vertical" />

          <Link className={classes.link} to={routeNames.general.donate} onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }>
            {translate("Donations")}
          </Link>
          {/* <Divider orientation="vertical" />
          <Link className={classes.link} to={routeNames.general.partner}>
            {translate("Our Partner")}
          </Link> */}

          {/* <Divider orientation="vertical" />
          <Link className={classes.link} to={routeNames.general.contactUs}>
            {translate("Contact Us")}
          </Link> */}
        </Flex>
        <Text fz="sm" align="center">
          {translate(
            "We are dedicated to improving lives and solving problems. Through our innovative programs and partnerships, we empower people and communities to create a better future."
          )}
        </Text>
      </Flex>
      <Divider
        orientation={isMobile ? "horizontal" : "vertical"}
        w={isMobile ? "70%" : ""}
      />
      <Flex direction={"column"} gap="sm">
        <Title order={3}>{translate("Contact Us")}</Title>
        <Text style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Mail /> gau@gmail.com
        </Text>
        <Text style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Phone />
          +86-432-423443
        </Text>
        <Text style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <MapPin /> Times Square, NewYork, USA
        </Text>
      </Flex>
    </Container>
  );
};
