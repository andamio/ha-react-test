import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export const MemoWrap = styled.div`
  button + button {
    margin-left: ${theme.space.medium};
  }

  p + * {
    margin-top: ${theme.space.medium};
  }
`;

export const ResultBox = styled.div`
  background-color: #fff;
  padding: 1rem;
  color: #000;

  + * {
    margin-top: ${theme.space.medium};
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  margin-top: ${theme.space.medium};
  padding: 8px;
`;

export const Note = styled.small`
display: inline-flex;
font-style: italic;
margin: ${theme.space.medium} 0;
`;
