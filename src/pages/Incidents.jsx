import {
  TriangleAlert,
  Road,
  Car,
  Flame,
  Droplets,
  MapPin,
  Clock,
  FileWarning,
} from "lucide-react";

import { useState } from "react";
import "./Incidents.css";

function Incidents() {
  const incidentCategories = [
    {
      id: 1,
      title: "All Incidents",
      icon: TriangleAlert,
    },
    {
      id: 2,
      title: "Traffic Accidents",
      icon: Car,
    },
    {
      id: 3,
      title: "Fires",
      icon: Flame,
    },
    {
      id: 4,
      title: "Road Defects",
      icon: Road,
    },
    {
      id: 5,
      title: "Water Engineering",
      icon: Droplets,
    },
  ];
 

  const reports = [
    {
    id: "INC-1024",
    title: "Car accident near main road",
    category: "Traffic Accidents",
    location: "New Cairo, Egypt",
    time: "10 minutes ago",
    severity: "Critical",
    status: "New",
    description:
    "A reported vehicle collision that may require immediate assistance.",
    },
    {
    id: "INC-1025",
    title: "Fire reported in a residential building",
    category: "Fires",
    location: "Nasr City, Cairo",
    time: "25 minutes ago",
    severity: "High",
   
    status: "Under Review",
    description:
    "A citizen reported a possible fire inside a residential building.",
    },
    {
    id: "INC-1026",
    title: "Damaged road surface",
    category: "Road Defects",
    location: "6th of October City",
    time: "40 minutes ago",
    severity: "Medium",
    status: "Assigned",
    description:
    "A damaged section of road may affect traffic and public safety.",
    },
    {
    id: "INC-1027",
    title: "Possible water leakage",
    category: "Water Engineering",
    location: "Sheikh Zayed, Giza",
    time: "1 hour ago",
    severity: "High",
    status: "Under Review",
    description:
    "Water leakage was reported and needs inspection by the relevant team.",
    },
    {
    id: "INC-1028",
    title: "Medical assistance required",
    category: "Medical Emergencies",
    location: "Heliopolis, Cairo",
    time: "1 hour ago",
    severity: "Critical",
    status: "New",
    description:
    "A report indicates that a person may need urgent medical assistance.",
    },
    ];

    
    const [selectedSeverity , setSelectedSeverity] = useState("All");


  const [selectedCategory, setSelectedCategory] =
    useState("All Incidents");

  const [selectedReport, setSelectedReport] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  //هنلف علي كل اتيم عندي ويشوف هل حقق الشرط ولا لا
  const filteredReports = reports.filter((report) => {
  //لو المستخدم مختار All Incidents، اعرض كل التصنيفات..
  //لو المستخدم مختار تصنيف معين، اعرض بس اللي ينتمي للتصنيف ده
  const matchesCategory =
    selectedCategory === "All Incidents" ||
    report.category === selectedCategory;
  //لبحث بيدور في:
  //- Report ID
  //- Report Title
  //- Location
  const matchesSearch =
    report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.location.toLowerCase().includes(searchTerm.toLowerCase());

  const matchSeverity = 
    selectedSeverity === "All" ||
    report.severity === selectedSeverity;

  return matchesCategory && matchesSearch && matchSeverity;

  
  });

  

  return (
    <div className="container-fluid incidents-page">

      <h2>Incident Review Center</h2>
      <p>Review and manage reported cases</p>

      
      <div className="incident-categories-wrapper">
        <div className="incident-categories">

          {incidentCategories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                type="button"
                className={`incident-category ${
                  selectedCategory === category.title ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedCategory(category.title)
                }
              >
                <Icon size={19} />
                <span>{category.title}</span>
              </button>
            );
          })}

        </div>
      </div>

      

      <div className="row g-4 mt-3">

  
     <div className="col-12 col-lg-5">
     <div className="reports-section">

      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="reports-header">
          <h6>Reported Incidents</h6>
          <p>Browse and select a report to review</p>
        </div>

        <div className="reports-count">
          <button className="btns">
         {filteredReports.length}
         </button>
        </div>
      </div>
      
      <div className="search mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search by title, ID or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="severity-filter">
                <ul className="severity-list">
                    <li>
                    <button className={`severity-btn  ${
                        selectedSeverity === "All" ? "active" : ""
                    }`}
                    onClick={() => setSelectedSeverity("All")}
                     >All</button>
                    </li>
                    <li>
                    <button className={`severity-btn critical ${
                        selectedSeverity === "Critical" ? "active" : ""
                    }`}
                     onClick={() => setSelectedSeverity("Critical")}
                    >Critical</button>
                    </li>
                    <li>
                    <button className={`severity-btn high ${
                        selectedSeverity === "High" ? "active" : ""
                    }`}
                    onClick={() => setSelectedSeverity("High")}
                    >High</button>
                    </li>
                    <li>
                    <button className={`severity-btn medium ${
                        selectedSeverity === "Medium" ? "active" : ""
                    }`}
                    onClick={() => setSelectedSeverity("Medium")}
                    >Medium</button>
                    </li>
                </ul>
                </div>

      
      <div className="reports-list">
        {filteredReports.map((report) => {
          return (
            <div 
              key={report.id}
              className="report-card mb-3"
              value={selectedReport}
              onClick={() => setSelectedReport(report)}
            >

              
              <div className=" d-flex justify-content-between align-items-center"
               onClick={() => setSelectedReport(report)}>
                
                <p className="report-id mb-0">{report.id}</p>
                <button className={`report-severity ${report.severity.toLowerCase()}`}>
                 {report.severity}
                </button>
              </div>

              
              <div className="report-info mt-2">
                <h5 className="report-title">{report.title}</h5>

                <p className="report-location mb-1">
                  {report.location}
                </p>

                <p className="report-time mb-2">
                    <Clock size={18} className="me-2" />
                  {report.time}
                </p>

                
                <div className="report-meta d-flex flex-column flex-sm-row gap-2">
                  <span className="report-status">
                    {report.status}
                  </span>

                </div>
              </div>

            </div>
          );
          
        })}
         {filteredReports.length === 0 && (
          <p>No incidents found.</p>
        )}
      </div>

     </div>
     </div>

 
     <div className="col-12 col-lg-7">
     <div className="incident-details-section">
    {selectedReport ? (
      <div className="incident-details">

       
        <div className="mb-4">
          <h4>SELECTED REPORT</h4>
          <h3>{selectedReport.title}</h3>
          <p>Report ID: {selectedReport.id}</p>
        </div>

        <hr />

        <div className="row g-3 my-3">
          <div className="col-12 col-sm-6">
            <p>Incident Category</p>
            <h5>{selectedReport.category}</h5>
          </div>

          <div className="col-12 col-sm-6">
            <p>Current Status</p>
            <button>{selectedReport.status}</button>
          </div>
        </div>

        <div className="row g-3 my-3">
          <div className="col-12 col-sm-6">
            <p>Reported Location</p>
            <h5>
              <MapPin size={18} className="me-2" />
              {selectedReport.location}
            </h5>
          </div>

          <div className="col-12 col-sm-6">
            <p>Reported Time</p>
            <h5>  
              <Clock size={18} className="me-2" />
              
              {selectedReport.time}
            </h5>
          </div>
        </div>
        <hr />

        <div className="my-4">
          <h4>Incident Description</h4>
          <p>{selectedReport.description}</p>
        </div>

        <div className="my-4">
          <h4>AI Assessment</h4>
          <p>{selectedReport.description}</p>
        </div>

        <hr />
        <div className="my-4">
          <h4>Review Actions</h4>
          <label className="form-label">Update Incident Status</label>

          <input
            className="form-control"
            value={selectedReport.status}
            readOnly
          />
        </div >
      </div>
    ) : (

      <div className="empty-details text-center d-flex flex-column justify-content-center align-items-center">
        <i className="fa-solid fa-file-circle-exclamation"></i>
        <FileWarning size={45} className="mb-3" />
        <h4>Select an Incident</h4>
        <p>Choose an incident from the list to view its details.</p>
      </div>

    )};
     </div>
     </div>
     </div>
     </div>

     
  );     

}

export default Incidents;