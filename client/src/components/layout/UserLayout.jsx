import React from 'react'
import TopNavbar from '../TopNavbar';
import AppSidebar from '../AppSidebar';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
      <div>
          <div className="min-h-screen flex flex-col w-full">
              <TopNavbar />
              <div className="flex flex-1 w-full overflow-hidden">
                  {/* Sidebar only visible on sm and up */}
                  <AppSidebar />

                  {/* Main content area grows to fill space */}
                  <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                      <Outlet />
                  </main>
              </div>
          </div>
      </div>
  );
}

export default UserLayout