import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

const AnimatedGithub = styled(animated(BsGithub))`
  width: 36px;
  height: 36px;
  &:hover {
    cursor: pointer;
  }
`;

const GithubIcon = () => {
  const [hovered, setHovered] = useState(false);
  const springProps = useSpring({
    transform: hovered ? 'scale(1.2)' : 'scale(1)',
  });

  return (
    <AnimatedGithub
      style={springProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default GithubIcon;
