import * as React from 'react';
import { LayoutProps, Menu, Notifications, Modals, Languages } from 'piral';
import { Search } from 'piral-search';
import { MenuToggle } from './MenuToggle';
import { User } from './User';

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="app-container">
    <div className="app-menu">
      <div className="app-menu-content">
        <Menu type="general" />
        <Menu type="admin" />
      </div>
    </div>
    <Notifications />
    <Modals />
    <div className="app-header">
      <div className="app-title">
      </div>
      <Menu type="header" />
    </div>
    <div className="app-content">{children}</div>
    <div className="app-footer">
      <Menu type="footer" />
    </div>
  </div>
);
