import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const notFoundWidth = '350px';
const notFoundHeight = '200px';
const notFoundBackground = '#FFFFFF';

const notFoundHeadingTextColor = '#000000';

const goHomeLinkTextColor = '#434343';
const goHomeLinkTextColorHover = '#989494';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${notFoundWidth};
  height: ${notFoundHeight};
  background: ${notFoundBackground};
  border: 1px solid black;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;

  &:hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const NotFoundHeading = styled.h1`
  color: ${notFoundHeadingTextColor};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: underline;
  color: ${goHomeLinkTextColor};

  &:hover {
    color: ${goHomeLinkTextColorHover};
  }
`;
