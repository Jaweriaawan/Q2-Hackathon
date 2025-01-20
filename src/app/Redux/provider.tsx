'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';

// Define the props type
interface ProviderWrapperProps {
  children: ReactNode;
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children }) => {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  );
};

export default ProviderWrapper;
