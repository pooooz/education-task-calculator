import styled from 'styled-components';

import dropdownImage from 'assets/icons/dropdownIcon.svg';

const selectWidth = '400px';
const selectHeight = '90px';

const dropdownIconWidth = '23px';
const dropdownIconHeight = '21px';

export const SelectWrap = styled.div`
  cursor: pointer;
  position: relative;
  width: ${selectWidth};
  height: ${selectHeight};
  &::after {
    content: url(${dropdownImage});
    pointer-events: none;
    width: ${dropdownIconWidth};
    height: ${dropdownIconHeight};
    position: absolute;
    top: 33px;
    right: 25px;
  }
`;

export const StyledSelect = styled.select`
  cursor: pointer;
  width: ${selectWidth};
  height: ${selectHeight};
  appearance: none;
  background-color: transparent;
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0 0 0 ${({ theme }) => theme.spaces.xl};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
