import Wrapper from "components/common/wrapper";
import Header from "components/common/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      {/* <Wrapper> */}
      {children}
      {/* </Wrapper> */}
    </>
  );
};

export default Layout;
