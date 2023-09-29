import { Card, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import routeNames from "../../routes/routeNames";

import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const Donation = () => {
  const { classes } = useStyles();
  const { translate } = useContext(UserContext);
  const navigate = useNavigate();
  const matches600 = useMediaQuery("(min-width: 600px)");
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Card withBorder className={classes.donation}>
        <Stack
          style={{ position: "absolute", height: "100%", width: "100%" }}
          align="center"
          justify={"center"}
          
        >
          <div
            style={{
              zIndex: 10,
              width: "100%",
            }}
          >
            <Text
              size={"25px"}
              weight="bold"
              align="center"
              color="white"
              // style={{ fontVariant: "small-caps" }}
            >
              <b className="fgColorF">{translate("Make a Donation")} </b>
            </Text>
            <Text
              size={"15px"}
              // weight="bold"
              align="center"
              color="white"
              w={matches600 ? "50rem" : "20rem"}
              ml={"auto"}
              mr={"auto"}
            >
              {
                translate("Your donation can empower the Gypsy community in Spain. Give today and make a lasting impact. Your contribution will directly support our efforts to empower and uplift Gypsy individuals and families. With your generous donation, we can provide education, healthcare, and social support programs tailored to their specific needs")
              }
            </Text>
          </div>
          <Button
            label="Donate now"
            primary={true}
            size={matches600 ? "lg" : "sm"}
            onClick={() => navigate(routeNames.general.donate)}
           
          />
        </Stack>
      </Card>
    </>
  );
};

export default Donation;
