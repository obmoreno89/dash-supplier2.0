import React from 'react';
import LineChart from '../../charts/LineChart03';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function AnalyticsCard01() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Current',
        data: [
          5000, 8700, 7500,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        label: 'Previous',
        data: [
          8000, 5000, 6500, 
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Métricas</h2>
      </header>
      <div className="px-5 py-1">
        <div className="flex flex-wrap">
          {/* Unique Visitors */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-slate-800 mr-2">21</div>
                <div className="text-sm font-medium text-emerald-500">+49%</div>
              </div>
              <div className="text-sm text-slate-500">Colaboradores activos</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Total Pageviews */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-slate-800 mr-2">7</div>
                <div className="text-sm font-medium text-emerald-500">+27%</div>
              </div>
              <div className="text-sm text-slate-500">Contratos firmados</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-slate-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Bounce Rate */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-slate-800 mr-2">54%</div>
                <div className="text-sm font-medium text-amber-500">-7%</div>
              </div>
              <div className="text-sm text-slate-500">Crecimiento de equipo en los últimos 3 meses</div>
            </div>
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={800} height={300} />
      </div>
    </div>
  );
}

export default AnalyticsCard01;
