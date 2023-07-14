import  { useState, useEffect } from "react";
import styled from "styled-components";

import { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) scale(0.5);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  animation: ${slideIn} 0.5s ease-in-out forwards;

  .alert-div {
    width: 290px;
    height: 250px;
    background-color: #e3e2fe;
    border-radius: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .btn-alert {
    margin-top: 25px;
    width: 130px;
    height: 40px;
    background-color: #cfceff;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    font-weight: bold;
    color: #3f305e;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      background-color: #b9b8ff;
    }
  }
`;

const Txt = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #3f305e;
  text-align: center;
`;

function MobileAlert() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDivOpen, setIsDivOpen] = useState(true);

  useEffect(() => {
    // Ekran boyutu değiştikçe kontrol et
    function handleResize() {
      if (window.innerWidth < 768) { 
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // sayfa ilk yüklendiğinde de kontrol et

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleOk() {
    setIsDivOpen(false);
  }

  return (
    <Container>
    <div >
      {isMobile && isDivOpen && (
        <div className="alert-div">
          <Txt>Bu sitede WebGL teknolojisi kullanılmaktadır.Dolayısıyla daha performanslı ve etkili 3D kullanım deneyimi için bilgisayar tercih ediniz.</Txt>
          <button className="btn-alert" onClick={handleOk}>Tamam</button>
        </div>
      )}
    </div>
    </Container>
  );
}

export default MobileAlert;