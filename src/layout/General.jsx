import { Outlet } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { LandingHeader } from "../components/LandingHeader";
import { LandingFooter } from "../Pages/General/LandingFooter";
const Layout = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <LandingHeader opened={opened} toggle={toggle} />
      <Outlet />
      <LandingFooter />
    </>
  );
};
export default Layout;
