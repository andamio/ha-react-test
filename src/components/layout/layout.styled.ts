import styled, { css } from 'styled-components';
import { theme } from '../../theme';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 4fr;
  background-color: ${theme.colors.bodyBackground};
  min-height: 100vh;
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body}
`;

// We can use the css export from styled-components to pass in common blocks of styles to our styled components
const commonSpacing = css`
  padding: ${theme.space.large};
`;

export const LayoutContent = styled.main`
  ${commonSpacing}
`;

export const LayoutSidebar = styled.aside`
  ${commonSpacing}
  background-color: ${theme.colors.sidebarBackground};
`;
