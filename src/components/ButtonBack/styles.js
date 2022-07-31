import styled from 'styled-components';

export const Button = styled.button`
  width: 140px;
  height: 40px;
  margin: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

