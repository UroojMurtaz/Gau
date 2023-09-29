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
import contactUs from "../../assets/icons/contactusHeader.png";
import map from "../../assets/icons/map.png";

import Aboutus1 from "../../assets/icons/au1.png";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const ContactUs = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const { translate } = useContext(UserContext);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      userType: (value) =>
        value?.length < 1 ? translate("Please select user type") : null,
      name: (value) =>
        /^[a-zA-Z ]{2,15}$/.test(value)
          ? null
          : translate("Please enter name between 2 to 15 characters"),
      message: (value) =>
        /^[a-zA-Z ]{2,15}$/.test(value)
          ? null
          : translate("Please enter message"),

      email: (value) =>
        /^\S+@\S+$/.test(value)
          ? null
          : translate("Please Enter a valid email"),
    },
  });

  return (
    <>
      <Container
        fluid
        p="0px"
        m="0px"
        style={{
          backgroundImage: `url(${contactUs})`,
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
          {translate("Contact Us")}
        </Title>
      </Container>
      <Container size={"xl"}>
        <Grid mt={"xl"} p={"xl"} gutter={9} gutterXs="xl" gutterMd="xl" gutterXl={70}>
          <Grid.Col span={12} md={6} lg={6} p={"xl"}>
            <Stack>
              <Text size={40} mb={"-20px"}>
                {translate("Contact Us")}
              </Text>

              <Text color="dimmed" fz={"md"}>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei. Mei an pericula euripidis, hinc partem
                ei est
              </Text>

              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                {/* <Container size="xs" px="xs"> */}
                  <InputField
                    required={true}
                    placeholder="Name"
                    form={form}
                    validateName="name"
                  />
                  <InputField
                    required={true}
                    placeholder="Email"
                    form={form}
                    validateName="email"
                  />
                  <TextArea
                    placeholder={"Your Message"}
                    form={form}
                    validateName="message"
                    rows="6"
                    
                  />
                <Button label={"Send"} w={"120px"} bg={true} type={"submit"} mt="xs" />
                {/* </Container> */}
              </form>
            </Stack>
          </Grid.Col>
          <Grid.Col span={12} md={6} lg={6}>
            <Image src={map} height={matches600 ?475 :320} width={matches600 ?660 :320} alt="Norway" />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default ContactUs;
