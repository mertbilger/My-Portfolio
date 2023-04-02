import React from "react";
import styled from "styled-components";
import GithubIcon from "../icons/gith";
import InstagramIcon from "../icons/instg";
import LinkedinIcon from "../icons/Linkedin";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 400px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 100px;
  list-style: none;

  @media only screen and (max-width: 768px) {
  display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;

`;


const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  const Reflesh = () => {
    window.location.reload();
  };
  const HandleWorks = () => {

    window.location.href = "https://github.com/mertbilger?tab=repositories";
  }
  const Handleİns = () => {

    window.location.href = "https://www.instagram.com/mertbilgerr/";
  }
  const HandleLinked = () => {
      
      window.location.href = "https://www.linkedin.com/in/mert-bilger-603b01227/";
  }
  return (

    <Section>
      <Container>
        <Links>
          <Logo onClick={Reflesh} src="img/plog.png" />
          <List>
            <ListItem onClick={Handleİns}><InstagramIcon /></ListItem>
            <ListItem onClick={HandleWorks}><GithubIcon /></ListItem>
            <ListItem onClick={HandleLinked}><LinkedinIcon /></ListItem>
          </List>
        </Links>
        <Icons>
          <Link to="/iletisim"><Button>İletişime Geç</Button></Link>
        </Icons>
      </Container>
    </Section>

  );
};

export default Navbar;
