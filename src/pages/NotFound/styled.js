import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 200px;
  background: white;
  border: 1px solid black;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  color: white;
  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;

  &:hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
  }
`;

export const NotFoundHeading = styled.h1`
  color: black;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: underline;
  color: #434343;

  &:hover {
    color: #989494;
  }
`;
