import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';


import AnalyticsCard01 from '../partials/analytics/AnalyticsCard01';
import AnalyticsCard10 from '../partials/analytics/AnalyticsCard10';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">


            {/* Welcome banner */}
            <WelcomeBanner />

             {/* Cards */}
             <div className="grid grid-cols-12 gap-6">

                {/* Line chart (Analytics) */}
                <AnalyticsCard01 />
                {/* Polar chart (Sessions By Gender) */}
                <AnalyticsCard10 />

          </div>

          

          </div>
        </main>

      </div>

    </div>
  );
}

export default Dashboard;