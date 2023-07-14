import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { BsLinkedin } from 'react-icons/bs';
import styled from 'styled-components';

const AnimatedLinkedin = styled(animated(BsLinkedin))`
  width: 36px;
  height: 36px;
  position: relative;
  cursor: pointer;
`;

const LinkedinIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <AnimatedLinkedin
      style={springProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default LinkedinIcon;
