import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// import Autoplay from "embla-carousel-autoplay";
import Slider1 from "../../assets/icons/Component1.svg";
import TestimonialsBackGround from "../../assets/icons/Testimonial.jpg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Testimonials = ({ carouselImages }) => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const {translate}=useContext(UserContext)

  // const autoplay = useRef(Autoplay({ delay: 10000 }));

  const searchBackgroundCarousel = (
    <Carousel
      // styles={{ indicators: { zIndex: 10} }}
      styles={{
        indicator: {
          width: "1rem",
          height: "0.5rem",
          transition: "width 250ms ease",
          backgroundColor:'rgb(0,0,0,0.4)',
          "&[data-active]": {
            width: "4rem",
          },
        },
      }}
      withIndicators
      loop
      align="start"
      height={matches600 ? "75vh" : "60vh"}
      // orientation="vertical"
      draggable={false}
      withControls={false}
      // plugins={[autoplay.current]}
    >
      {carouselImages?.map((image, index) => {
        return (
          <Carousel.Slide key={index}>
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
                <Text align="center" color="#327BBF" size={"xl"} mb={"md"}>
                  {" "}
                  &lt;&nbsp;{translate("Testimonials")}&nbsp;&gt;{" "}
                </Text>

                <Title align="center" mb={35}>
                  {translate("Client Testimonials")}
                </Title>
                <Group position="center">
                  <Avatar
                    style={{ border: "6px solid #327BBF" }}
                    size={matches600 ? 150 : 100}
                    mb={"md"}
                    radius={100}
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                  />
                </Group>
                <Text
                  size={matches600 ? "1.7vw" : "5vw"}
                  weight="bold"
                  align="center"
                  // color="white"
                  style={{ fontVariant: "small-caps" }}
                >
                  <b className="fgColorF">Jennifer Markeling </b>
                </Text>
                <Text
                  size={matches600 ? "1.1vw" : "3vw"}
                  // weight="bold"
                  align="center"
                  // color="white"

                  w={matches600 ? "50rem" : "20rem"}
                  ml={"auto"}
                  mr={"auto"}
                >
                  I would highly recommended them and would love to work with
                  them in the future, Very Professional word.Strongly
                  Recommended.
                </Text>
              </div>
            </Stack>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
  return (
    <Paper
      mt={"5rem"}
      withBorder
      style={{
        backgroundColor: "#000",
        position: "relative",
        backgroundImage: `url(${TestimonialsBackGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <SearchBackgroundOpacityDiv /> */}
      {searchBackgroundCarousel}
    </Paper>
  );
};

export default Testimonials;
