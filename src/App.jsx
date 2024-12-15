import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";

const Main = styled.main`
  display: flex;
  overflow: hidden;
  height: 100%;
`;

const Wrapper = styled.div`
  flex: 1 1 100%;
  overflow: auto;
  width: 100%;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Main>
    </>
  );
}

export default App;
