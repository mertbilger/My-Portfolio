import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { BsInstagram } from 'react-icons/bs';
import styled from 'styled-components';

const AnimatedInstagram = styled(animated(BsInstagram))`
  width: 36px;
  height: 36px;
  position: relative;
  cursor: pointer;
`;


const InstagramIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    boxShadow: isHovered ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
    config: { tension: 1700, friction: 5 },
  });

  return (
    <AnimatedInstagram
      style={springProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default InstagramIcon;
