
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Who from "./pages/Who";
import RootLayout from "./Router/Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const Container = styled.div`

height: 100vh;
color: white;
background: url("/img/bg.jpg");
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar{
  display: none;

}

`;


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Hero />
        },
        {
          path: "/hakkimizda",
          element: <Who />
        },
        {
          path: "/iletisim",
          element: <Contact/>
        }
      ]
    }
  ])

  return (

    <Container>
    <RouterProvider router={router} />
    <GlobalStyle />
    </Container>

  );
}

export default App;
