import { FC, ReactNode } from 'react';
import { LayoutContent, LayoutSidebar, LayoutWrapper } from './layout.styled';

interface Props {
  sidebarContent?: ReactNode;
  mainContent?: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  return (
    <LayoutWrapper>
      <LayoutSidebar>{props.sidebarContent}</LayoutSidebar>
      <LayoutContent>{props.mainContent}</LayoutContent>
    </LayoutWrapper>
  );
};
