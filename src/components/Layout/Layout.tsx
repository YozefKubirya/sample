import React, { FC, ReactNode } from 'react';
import css from '../Layout/Layout.module.css';
import { AppBar } from '../AppBar/AppBar.tsx'; // Ensure the correct path for AppBar

// Define props type for Layout
interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
};