import styled from 'styled-components';

import dropdownImage from 'assets/icons/dropdownIcon.svg';

export const SelectWrap = styled.div`
  cursor: pointer;
  position: relative;
  width: 400px;
  height: 90px;
  &::after {
    content: url(${dropdownImage});
    pointer-events: none;
    width: 23px;
    height: 21px;
    position: absolute;
    top: 33px;
    right: 25px;
  }
`;

export const StyledSelect = styled.select`
  cursor: pointer;
  width: inherit;
  height: inherit;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0 0 0 30px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  option {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
