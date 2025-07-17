import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const [costData, setCostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get('/costs');
        setCostData(res.data);
      } catch (err) {
        console.error('Error fetching cost data', err);
      }
    };
    fetchData();
  }, []);

  if (!costData) return <p>Loading...</p>;

  const chartData = {
    labels: costData.dailyBreakdown.map(item => item.date),
    datasets: [
      {
        label: 'Daily Cost ($)',
        data: costData.dailyBreakdown.map(item => item.cost),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.2
      }
    ]
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Cloud Cost Dashboard</h2>
      <p><strong>Today:</strong> ${costData.summary.totalToday}</p>
      <p><strong>This Month:</strong> ${costData.summary.totalMonthly}</p>

      <div style={{ maxWidth: '600px' }}>
        <Line data={chartData} />
      </div>

      <h3>Anomalies</h3>
      <ul>
        {costData.anomalies.map((a, idx) => (
          <li key={idx}>
            {a.date} — <strong>{a.note}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
