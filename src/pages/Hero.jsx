import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { DiGithubFull } from "react-icons/di";
import Navbar from "../components/Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
  @media only screen and (max-width: 528px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 528px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 50px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 35%;
  }
  @media only screen and (max-width: 528px) {
    width: 100%;
    height: 35%;
  }
`;

const StyledGit = styled(DiGithubFull)`
{
  width: 330px;
  height: 350px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
}

@media only screen and (max-width: 768px) {
  {
    width: 250px;
    height: 230px;
  }
}

@keyframes animate {
  to {
    transform: translateY(20px);
  }
}

`;


const Hero = () => {
  const HandleMore = () => {
    window.location.href = "https://www.linkedin.com/in/mert-bilger-603b01227/";
  }


  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Merhaba Ben Mert Bilger</Title>
          <WhatWeDo>
            <Subtitle>Ne Yapıyorum?</Subtitle>
          </WhatWeDo>
          <Desc>
            Estetik ve kullanışlı web uygulamaları geliştiriyorum. Ayrıca yapmış olduğum işleri insan merkezli yapıyorum.
          </Desc>
          <Button onClick={HandleMore}>Hakkımda Daha Fazlası</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
            <OrbitControls  autoRotate/>
              <ambientLight intensity={1} />
              <directionalLight position={[2, 1, 3]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <StyledGit />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;