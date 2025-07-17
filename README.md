# ☁️ Cloud Cost Analyzer

A full-stack dashboard to simulate real-time AWS spend analysis. Authenticated, reactive, and built for clarity. Whether you’re tracking $7 or $7000 a day, this setup shows you how to monitor, visualize, and act on cloud costs

## 🚀 Live Features

- 🔐 JWT-auth login system (Admin / Viewer)
- 📈 Interactive line chart of daily cloud cost breakdowns (Chart.js)
- 🧠 Cost anomaly flags (spike detection via mock data)
- 📊 Realtime cost summaries: daily + monthly
- ⚡ Fast React frontend, Node/Express backend, zero fluff

## 🔧 Stack

| Layer        | Tech                         |
|--------------|------------------------------|
| Frontend     | React, Chart.js, Axios       |
| Backend      | Node.js, Express, JWT        |
| Mock Data    | Custom JSON (Cloud Cost API) |
| Auth         | Token-based (login + role)   |
| DevOps       | GitHub, Docker, Vercel       |

## 🧠 Vision

This isn't just a mock — it's a working shell of what a real SaaS analytics platform could look like. Swap the data source for real AWS Cost Explorer and you're ready to integrate alerts, budgets, notifications, and billing thresholds.

Built for engineering portfolios, DevOps learning, or pre-prod scaffolding.

## 🛠 Getting Started

Clone it:
```bash
git clone https://github.com/HashimMNYC/cloud-cost-analyzer.git
cd cloud-cost-analyzer
Run it:

bash
Copy
Edit
# Backend
cd server
npm install
node src/server.js

# Frontend (in a new terminal)
cd ../client
npm install
npm start
Login:

nginx
Copy
Edit
admin / admin123
viewer / viewer123
🧪 Sample Output
"Today’s cost: $7.22"

"Anomaly detected July 3 — 3x normal cost"

🔒 Auth Notes
Admins see all

Viewers can be scoped (future enhancement)

JWT stored in localStorage, passed via Axios interceptors

📦 Deployable Setup
Frontend can run on Vercel, Netlify, or S3

Backend runs on Render, Railway, or EC2

Mocked for now, plug in real data later

🧱 File Structure
bash
Copy
Edit
cloud-cost-analyzer/
├── client/     # React frontend
├── server/     # Node backend
├── .env        # JWT secret, ports
├── README.md
✍️ Author
Hashim Masood
