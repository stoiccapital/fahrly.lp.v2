import React from 'react';

export type DashboardMockProps = {
  ariaHidden?: boolean;
};

export function DashboardMock({ ariaHidden = true }: DashboardMockProps) {
  return (
    <div aria-hidden={ariaHidden ? 'true' : undefined} className="dashboard-mock">
      <div className="hero-visual">
        <div className="floating-card floating-card-1">
          <div className="floating-stat">
            <div className="floating-stat-icon green">
              <span className="material-icons">trending_up</span>
            </div>
            <div className="floating-stat-content">
              <div className="floating-stat-value">+12.5%</div>
              <div className="floating-stat-label">Revenue Growth</div>
            </div>
          </div>
        </div>

        <div className="floating-card floating-card-2">
          <div className="floating-stat">
            <div className="floating-stat-icon purple">
              <span className="material-icons">groups</span>
            </div>
            <div className="floating-stat-content">
              <div className="floating-stat-value">24/32</div>
              <div className="floating-stat-label">Drivers Online</div>
            </div>
          </div>
        </div>

        <div className="hero-dashboard">
          <div className="dashboard-topbar">
            <span className="dashboard-dot red" />
            <span className="dashboard-dot yellow" />
            <span className="dashboard-dot green" />
            <span className="dashboard-url">app.fahrly.com/dashboard</span>
          </div>
          <div className="dashboard-body">
            <div className="dash-mini-sidebar">
              <div className="dash-mini-logo">
                <span className="dash-mini-logo-icon material-icons">directions_car</span>
                <span className="dash-mini-logo-text">Fahrly</span>
              </div>
              <div className="dash-mini-nav">
                <div className="dash-mini-item active">
                  <span className="material-icons">dashboard</span>
                  Dashboard
                </div>
                <div className="dash-mini-item">
                  <span className="material-icons">groups</span>
                  Drivers
                </div>
                <div className="dash-mini-item">
                  <span className="material-icons">directions_car</span>
                  Vehicles
                </div>
                <div className="dash-mini-item">
                  <span className="material-icons">route</span>
                  Rides
                </div>
                <div className="dash-mini-item">
                  <span className="material-icons">badge</span>
                  HR
                </div>
                <div className="dash-mini-item">
                  <span className="material-icons">calculate</span>
                  Salary
                </div>
                <div className="dash-mini-item">
                  <span className="material-icons">receipt_long</span>
                  Timesheets
                </div>
                <div className="dash-mini-item">
                  <span className="material-icons">gavel</span>
                  Compliance
                </div>
              </div>
            </div>

            <div className="dash-mini-main">
              <div className="dash-mini-header">
                <div>
                  <div className="dash-mini-title">Dashboard</div>
                  <div className="dash-mini-subtitle">Real-time fleet overview</div>
                </div>
                <div className="dash-mini-live-badge">
                  <span className="live-dot" />
                  Live
                </div>
              </div>

              <div className="dash-mini-kpis">
                <div className="dash-mini-kpi highlight">
                  <div className="kpi-label">Total Earnings</div>
                  <div className="kpi-value">€12,847</div>
                  <div className="kpi-trend kpi-trend-highlight">
                    <span className="material-icons">trending_up</span>
                    +12.5%
                  </div>
                </div>
                <div className="dash-mini-kpi">
                  <div className="kpi-label">Total Trips</div>
                  <div className="kpi-value">1,248</div>
                  <div className="kpi-trend">
                    <span className="material-icons">trending_up</span>
                    +8.3%
                  </div>
                </div>
                <div className="dash-mini-kpi">
                  <div className="kpi-label">Active Drivers</div>
                  <div className="kpi-value">32</div>
                  <div className="kpi-trend">
                    <span className="material-icons">trending_up</span>
                    +4.1%
                  </div>
                </div>
                <div className="dash-mini-kpi">
                  <div className="kpi-label">Avg. Rating</div>
                  <div className="kpi-value">4.92</div>
                  <div className="kpi-trend">
                    <span className="material-icons">star</span>
                    +0.2
                  </div>
                </div>
              </div>

              <div className="dash-grid">
                <div className="dash-card">
                  <div className="dash-card-header">
                    <div className="dash-card-title">Active Drivers</div>
                    <div className="dash-card-badge">
                      <span className="material-icons">arrow_upward</span>
                      +4%
                    </div>
                  </div>
                  <div className="dash-card-body">
                    <div className="mini-driver-list">
                      <div className="mini-driver">
                        <div className="mini-driver-avatar">AN</div>
                        <div className="mini-driver-info">
                          <div className="mini-driver-name">Ahmed N.</div>
                          <div className="mini-driver-status">On trip</div>
                        </div>
                        <div className="mini-driver-earnings">€218</div>
                      </div>
                      <div className="mini-driver">
                        <div className="mini-driver-avatar">CL</div>
                        <div className="mini-driver-info">
                          <div className="mini-driver-name">Clara L.</div>
                          <div className="mini-driver-status">Available</div>
                        </div>
                        <div className="mini-driver-earnings">€174</div>
                      </div>
                      <div className="mini-driver">
                        <div className="mini-driver-avatar">MS</div>
                        <div className="mini-driver-info">
                          <div className="mini-driver-name">Marco S.</div>
                          <div className="mini-driver-status">On trip</div>
                        </div>
                        <div className="mini-driver-earnings">€201</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dash-card">
                  <div className="dash-card-header">
                    <div className="dash-card-title">Live Map</div>
                    <div className="dash-card-badge">
                      <span className="material-icons">navigation</span>
                      12 cars
                    </div>
                  </div>
                  <div className="dash-card-body">
                    <div className="mini-map">
                      <span className="mini-map-dot" />
                      <span className="mini-map-dot" />
                      <span className="mini-map-dot" />
                      <span className="mini-map-dot" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

        .dashboard-mock,
        .dashboard-mock *::before,
        .dashboard-mock *::after,
        .dashboard-mock * {
          box-sizing: border-box;
        }

        .dashboard-mock {
          font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--text-primary);
        }

        .dashboard-mock .hero-visual {
          position: relative;
        }

        .dashboard-mock .hero-dashboard {
          position: relative;
          background: var(--dashboard-surface);
          border-radius: 24px;
          box-shadow: var(--dashboard-shadow);
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .dashboard-mock .hero-dashboard:hover {
          box-shadow: var(--dashboard-shadow-hover);
        }

        .dashboard-mock .hero-dashboard::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: var(--dashboard-glow-gradient);
          border-radius: 26px;
          z-index: -1;
          opacity: 0.3;
          filter: blur(12px);
        }

        .dashboard-mock .dashboard-topbar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 20px;
          background: var(--dashboard-surface-muted);
          border-bottom: 1px solid var(--dashboard-border);
        }

        .dashboard-mock .dashboard-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dashboard-mock .dashboard-dot.red {
          background: var(--dashboard-dot-red);
        }
        .dashboard-mock .dashboard-dot.yellow {
          background: var(--dashboard-dot-yellow);
        }
        .dashboard-mock .dashboard-dot.green {
          background: var(--dashboard-dot-green);
        }

        .dashboard-mock .dashboard-url {
          flex: 1;
          text-align: center;
          font-size: 12px;
          color: var(--dashboard-text-muted);
          font-weight: 500;
        }

        .dashboard-mock .dashboard-body {
          display: grid;
          grid-template-columns: 200px 1fr;
        }

        .dashboard-mock .dash-mini-sidebar {
          background: var(--dashboard-surface);
          border-right: 1px solid var(--dashboard-surface-subtle);
          padding: 20px 12px;
        }

        .dashboard-mock .dash-mini-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 8px;
          margin-bottom: 24px;
        }

        .dashboard-mock .dash-mini-logo-icon {
          width: 28px;
          height: 28px;
          background: var(--dashboard-logo-bg);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--dashboard-logo-text);
          font-size: 14px;
        }

        .dashboard-mock .dash-mini-logo-text {
          font-size: 16px;
          font-weight: 700;
        }

        .dashboard-mock .dash-mini-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .dashboard-mock .dash-mini-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--dashboard-text-secondary);
          transition: all 0.15s ease;
        }

        .dashboard-mock .dash-mini-item.active {
          background: var(--dashboard-surface-subtle);
          color: var(--text-primary);
        }

        .dashboard-mock .dash-mini-item .material-icons {
          font-size: 18px;
        }

        .dashboard-mock .dash-mini-main {
          background: var(--dashboard-surface-muted);
          padding: 20px;
          min-height: 420px;
        }

        .dashboard-mock .dash-mini-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .dashboard-mock .dash-mini-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .dashboard-mock .dash-mini-subtitle {
          font-size: 12px;
          color: var(--dashboard-text-muted);
        }

        .dashboard-mock .dash-mini-live-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--dashboard-positive);
          font-weight: 600;
        }

        .dashboard-mock .live-dot {
          width: 6px;
          height: 6px;
          background: var(--dashboard-positive);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .dashboard-mock .dash-mini-kpis {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .dashboard-mock .dash-mini-kpi {
          background: var(--dashboard-surface);
          border: 1px solid var(--dashboard-border);
          border-radius: 12px;
          padding: 14px;
          transition: all 0.2s ease;
        }

        .dashboard-mock .dash-mini-kpi:hover {
          border-color: var(--dashboard-border-strong);
          box-shadow: var(--dashboard-soft-shadow);
        }

        .dashboard-mock .dash-mini-kpi.highlight {
          background: var(--dashboard-highlight-bg);
          border-color: var(--dashboard-border-strong);
        }

        .dashboard-mock .dash-mini-kpi.highlight .kpi-label {
          opacity: 0.7;
        }

        .dashboard-mock .kpi-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--dashboard-text-muted);
          margin-bottom: 4px;
        }

        .dashboard-mock .kpi-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .dashboard-mock .kpi-trend {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          font-size: 10px;
          font-weight: 600;
          color: var(--dashboard-positive);
          margin-top: 4px;
        }


        .dashboard-mock .kpi-trend .material-icons {
          font-size: 12px;
        }

        .dashboard-mock .dash-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .dashboard-mock .dash-card {
          background: var(--dashboard-surface);
          border: 1px solid var(--dashboard-border);
          border-radius: 12px;
          overflow: hidden;
        }

        .dashboard-mock .dash-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-bottom: 1px solid var(--dashboard-surface-subtle);
        }

        .dashboard-mock .dash-card-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .dashboard-mock .dash-card-badge {
          font-size: 10px;
          font-weight: 600;
          color: var(--dashboard-positive);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .dashboard-mock .dash-card-body {
          padding: 12px 14px;
        }

        .dashboard-mock .mini-driver-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dashboard-mock .mini-driver {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dashboard-mock .mini-driver-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--dashboard-surface-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
          color: var(--dashboard-text-secondary);
        }

        .dashboard-mock .mini-driver-info {
          flex: 1;
        }

        .dashboard-mock .mini-driver-name {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .dashboard-mock .mini-driver-status {
          font-size: 10px;
          color: var(--dashboard-positive);
        }

        .dashboard-mock .mini-driver-earnings {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .dashboard-mock .mini-map {
          height: 100px;
          background: var(--dashboard-map-bg);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .dashboard-mock .mini-map-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--dashboard-positive);
          border-radius: 50%;
          box-shadow: var(--dashboard-map-dot-shadow);
        }

        .dashboard-mock .mini-map-dot:nth-child(1) {
          top: 20%;
          left: 30%;
        }
        .dashboard-mock .mini-map-dot:nth-child(2) {
          top: 60%;
          left: 50%;
        }
        .dashboard-mock .mini-map-dot:nth-child(3) {
          top: 40%;
          left: 70%;
        }
        .dashboard-mock .mini-map-dot:nth-child(4) {
          top: 70%;
          left: 25%;
        }

        .dashboard-mock .floating-card {
          position: absolute;
          background: var(--dashboard-surface);
          border-radius: 12px;
          box-shadow: var(--dashboard-float-shadow);
          padding: 12px 16px;
          z-index: 10;
        }

        .dashboard-mock .floating-card-1 {
          top: -30px;
          right: -40px;
        }

        .dashboard-mock .floating-card-2 {
          bottom: 60px;
          left: -60px;
        }

        .dashboard-mock .floating-stat {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dashboard-mock .floating-stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dashboard-mock .floating-stat-icon.green {
          background: var(--dashboard-stat-green);
          color: var(--dashboard-icon-inverse);
        }

        .dashboard-mock .floating-stat-icon.purple {
          background: var(--dashboard-stat-purple);
          color: var(--dashboard-icon-inverse);
        }

        .dashboard-mock .floating-stat-icon .material-icons {
          font-size: 18px;
        }

        .dashboard-mock .floating-stat-content {
          display: flex;
          flex-direction: column;
        }

        .dashboard-mock .floating-stat-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .dashboard-mock .floating-stat-label {
          font-size: 11px;
          color: var(--dashboard-text-muted);
        }

        @media (max-width: 1024px) {
          .dashboard-mock .dash-mini-kpis {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .dashboard-mock .dashboard-body {
            grid-template-columns: 1fr;
          }

          .dashboard-mock .dash-mini-sidebar {
            display: none;
          }

          .dashboard-mock .dash-mini-kpis {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-mock .floating-card {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
