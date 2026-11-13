import {
  SquareActivity,
  NotebookText,
  CircleCheck,
  TriangleAlert,
  MapPin,
  Clock3,
  CarFront,
  Droplets,
  Flame,
  BellRing,
  ArrowUpRight,
} from "lucide-react";

import "./Dashbourd.css";

function Dashbourd() {
  
  const stats = [
    {
      title: "Active Incidents",
      value: "86",
      description: "Currently in progress",
      icon: SquareActivity,
      color: "blue",
    },
    {
      title: "Total Incidents",
      value: "1,284",
      description: "All reported incidents",
      icon: NotebookText,
      color: "purple",
    },
    {
      title: "Resolved Incidents",
      value: "1,102",
      description: "Successfully resolved",
      icon: CircleCheck,
      color: "green",
    },
    {
      title: "Critical Incidents",
      value: "12",
      description: "Require urgent response",
      icon: TriangleAlert,
      color: "red",
    },
  ];

  const incidents = [
    {
      id: "INC-2041",
      type: "Traffic Accident",
      location: "Ring Road, New Cairo",
      priority: "Critical",
      status: "In Progress",
      time: "10:42 AM",
    },
    {
      id: "INC-2040",
      type: "Water Leak",
      location: "Fifth Settlement",
      priority: "Medium",
      status: "Assigned",
      time: "10:18 AM",
    },
    {
      id: "INC-2039",
      type: "Medical Emergency",
      location: "Nasr City, Cairo",
      priority: "High",
      status: "Responding",
      time: "09:56 AM",
    },
    {
      id: "INC-2038",
      type: "Road Damage",
      location: "Sheikh Zayed",
      priority: "Low",
      status: "Resolved",
      time: "09:32 AM",
    },
  ];

  const alerts = [
    {
      title: "Fire reported near Industrial Zone",
      location: "6th of October City",
      priority: "Critical",
      time: "4 min ago",
    },
    {
      title: "Multiple-vehicle collision",
      location: "Ring Road, Cairo",
      priority: "High",
      time: "12 min ago",
    },
    {
      title: "Water leakage reported",
      location: "New Cairo",
      priority: "Medium",
      time: "20 min ago",
    },
  ];

  const categories = [
    { name: "Traffic Accidents", count: 42, percent: 70, color: "traffic" },
    { name: "Fire Incidents", count: 18, percent: 40, color: "fire" },
    { name: "Medical Emergencies", count: 15, percent: 30, color: "medical" },
    { name: "Infrastructure", count: 11, percent: 25, color: "water" },
  ];

  return (
    <div className="dashboard-page container-fluid">
      
      <div className="dashboard-page-header d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <p className="dashboard-eyebrow mb-1">ISSNC CONTROL CENTER</p>
          <h1 className="dashboard-title mb-2">Dashboard Overview</h1>
          <p className="dashboard-subtitle mb-0">
            Monitor city safety and emergency response in real time.
          </p>
        </div>

        <button type="button" className="dashboard-export-btn">
          <ArrowUpRight size={18} />
          Export Report
        </button>
      </div>

     
      <div className="row g-3 mb-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="col-12 col-sm-6 col-xl-3" key={stat.title}>
              <div className="stat-card h-100">
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <div>
                    <p className="stat-card-title mb-2">{stat.title}</p>
                    <h2 className="stat-card-value mb-2">{stat.value}</h2>
                  </div>

                  <div className={`stat-icon stat-icon-${stat.color}`}>
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <p className="stat-card-description mb-0">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

     
      <div className="row g-4 mb-4">
       
        <div className="col-12 col-xxl-8">
          <section className="dashboard-panel h-100">
            <div className="panel-header d-flex justify-content-between align-items-center gap-3">
              <div>
                <h2 className="panel-title mb-1">Recent Incidents</h2>
                <p className="panel-subtitle mb-0">
                  Latest reports received by the system
                </p>
              </div>

              <button type="button" className="view-all-btn">
                View all →
              </button>
            </div>

            <div className="table-responsive">
              <table className="table incidents-table align-middle mb-0">
                <thead>
                  <tr>
                    <th>Incident</th>
                    <th>Location</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>

                <tbody>
                  {incidents.map((incident) => (
                    <tr key={incident.id}>
                      <td>
                        <div className="incident-name">
                          {incident.type}
                        </div>
                        <div className="incident-id">{incident.id}</div>
                      </td>

                      <td>
                        <div className="incident-location">
                          <MapPin size={14} />
                          <span>{incident.location}</span>
                        </div>
                      </td>

                      <td>
                        <span
                          className={`priority-badge priority-${incident.priority
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {incident.priority}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`status-badge status-${incident.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {incident.status}
                        </span>
                      </td>

                      <td className="incident-time">
                        <Clock3 size={14} />
                        {incident.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        
        <div className="col-12 col-xxl-4">
          <section className="dashboard-panel h-100">
            <div className="panel-header d-flex justify-content-between align-items-center gap-2">
              <div>
                <h2 className="panel-title mb-1">Critical Alerts</h2>
                <p className="panel-subtitle mb-0">
                  Incidents requiring attention
                </p>
              </div>

              <div className="alerts-header-icon">
                <BellRing size={20} />
              </div>
            </div>

            <div className="alerts-list">
              {alerts.map((alert) => (
                <div className="alert-item" key={alert.title}>
                  <div
                    className={`alert-indicator alert-indicator-${alert.priority.toLowerCase()}`}
                  />

                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                      <h3 className="alert-title mb-0">{alert.title}</h3>

                      <span
                        className={`priority-badge priority-${alert.priority.toLowerCase()}`}
                      >
                        {alert.priority}
                      </span>
                    </div>

                    <p className="alert-location mb-2">
                      <MapPin size={13} />
                      {alert.location}
                    </p>

                    <p className="alert-time mb-0">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button type="button" className="alerts-view-btn">
              View all alerts →
            </button>
          </section>
        </div>
      </div>

      
      <div className="row g-4">
        
        <div className="col-12 col-lg-7">
          <section className="dashboard-panel h-100">
            <div className="panel-header">
              <h2 className="panel-title mb-1">Incidents by Category</h2>
              <p className="panel-subtitle mb-0">
                Distribution of reported incidents
              </p>
            </div>

            <div className="category-list">
              {categories.map((category) => (
                <div className="category-item" key={category.name}>
                  <div className="d-flex justify-content-between align-items-center gap-3 mb-2">
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">{category.count}</span>
                  </div>

                  <div
                    className="progress category-progress"
                    role="progressbar"
                    aria-label={category.name}
                    aria-valuenow={category.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className={`progress-bar progress-${category.color}`}
                      style={{ width: `${category.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="analytics-note mb-0">
              Demo data for layout preview.
            </p>
          </section>
        </div>

        
        <div className="col-12 col-lg-5">
          <section className="dashboard-panel response-panel h-100">
            <div className="panel-header">
              <h2 className="panel-title mb-1">Response Summary</h2>
              <p className="panel-subtitle mb-0">
                Current system snapshot
              </p>
            </div>

            <div className="response-summary-item">
              <div className="response-summary-icon response-blue">
                <CarFront size={21} />
              </div>
              <div className="flex-grow-1">
                <p className="response-label mb-1">Incidents in progress</p>
                <h3 className="response-value mb-0">86</h3>
              </div>
            </div>

            <div className="response-summary-item">
              <div className="response-summary-icon response-green">
                <CircleCheck size={21} />
              </div>
              <div className="flex-grow-1">
                <p className="response-label mb-1">Resolved incidents</p>
                <h3 className="response-value mb-0">1,102</h3>
              </div>
            </div>

            <div className="response-summary-item">
              <div className="response-summary-icon response-red">
                <Flame size={21} />
              </div>
              <div className="flex-grow-1">
                <p className="response-label mb-1">Urgent incidents</p>
                <h3 className="response-value mb-0">12</h3>
              </div>
            </div>

            <div className="response-summary-item">
              <div className="response-summary-icon response-purple">
                <Droplets size={21} />
              </div>
              <div className="flex-grow-1">
                <p className="response-label mb-1">Infrastructure reports</p>
                <h3 className="response-value mb-0">11</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashbourd;