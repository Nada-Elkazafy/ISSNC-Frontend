import { MapContainer, TileLayer , Marker ,Popup ,useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import "./LiveMap.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";


import { useState ,useEffect } from "react";
console.log("HeatLayer:", L.heatLayer);
// import { createServer } from "vite";

const HeatmapLayer = ({ reports }) => {
    const map = useMap();
    

    useEffect(() => {
        const heatPoints = reports.map((report) => [
            report.coordinates[0],
            report.coordinates[1],
            0.8
        ]);

        const heatLayer = L.heatLayer(heatPoints, {
            radius: 35,
            blur: 25,
            maxZoom: 17,
            gradient: {
                0.2: "blue",
                0.4: "lime",
                0.6: "yellow",
                1.0: "red"
            }
        });

        heatLayer.addTo(map);

        return () => {
            map.removeLayer(heatLayer);
        };
    }, [map, reports]);

    return null;
};

function LiveMap() {

 const Mapreports = [
    {
        id: 1,
        title: "Fire Incident",
        location: "Downtown Cairo",
        severity: "High",
        coordinates: [30.0444, 31.2357],
        category: "Fires",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 2,
        title: "Water Leakage",
        location: "Nasr City",
        severity: "Medium",
        coordinates: [30.0561, 31.3300],
        category: "Water",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 3,
        title: "Traffic Accident",
        location: "New Cairo",
        severity: "Low",
        coordinates: [30.0275, 31.4913],
        category: "Traffic",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 4,
        title: "Gas Leak",
        location: "Giza",
        severity: "Critical",
        coordinates: [30.0131, 31.2089],
        category: "Gas",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 5,
        title: "Power Outage",
        location: "Heliopolis",
        severity: "High",
        coordinates: [30.0866, 31.3220],
        category: "Power",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 6,
        title: "Flooding",
        location: "Maadi",
        severity: "Medium",
        coordinates: [29.9602, 31.2569],
        category: "Flood",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 7,
        title: "Road Blockage",
        location: "Dokki",
        severity: "Low",
        coordinates: [30.0384, 31.2122],
        category: "Traffic",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 8,
        title: "Chemical Spill",
        location: "6th of October City",
        severity: "Critical",
        coordinates: [29.9668, 30.9400],
        category: "Chemical",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 9,
        title: "Oil Leak",
        location: "Zamalek",
        severity: "High",
        coordinates: [30.0618, 31.2197],
        category: "Oil",
        status: "Open",
        department: "Civil Protection",
    },
    {
        id: 10,
        title: "Oil Leak",
        location: "Shorouk City",
        severity: "High",
        coordinates: [30.1292, 31.6260],
        category: "Oil",
        status: "Open",
        department: "Civil Protection",
    }
];
    const HighCount = Mapreports.filter((report) => {
        return report.severity === "High"

    }).length;
    const MediumCount = Mapreports.filter((report) => {
        return report.severity === "Medium"
    }).length;
    const LowCount = Mapreports.filter((report) => {
        return report.severity === "Low"
    }).length;
    const CriticalCount = Mapreports.filter((report) => {
        return report.severity === "Critical"
    }).length;

    const [selectedSeverity , setSelectedSeverity] = useState("All");
    const [mapLayer,setMapLayer] = useState("Normal");


    const filteredMapReports = Mapreports.filter((report) =>{
        return(
            (selectedSeverity === "All" || report.severity === selectedSeverity)
        );
    });

    const createServerityIcon = (severity) => {
        return L.divIcon ({
            className :"severity-marker-wrapper" ,
            html:`<span class="severity-marker severity-${severity.toLowerCase()}"></span>`,
            iconSize:[20,20],
            iconAnchor:[10,10],
            popupAnchor:[0,-10],
        });
    };

    

    const renderMarkers = () =>{
        return filteredMapReports.map((report) =>(
            <Marker 
            key={report.id}
            position={report.coordinates}
            icon={createServerityIcon(report.severity)}
        >
            <Popup>
                <h3>{report.title}</h3>
                <p className="mb-1">{report.location}</p>
                <p className="mb-0">Severity: {report.severity}</p>
            </Popup>
        </Marker>
    ))};

    // const HeatmapLayer = ({reports}) => {
    //     const map = useMap();

    //     console.log("Heat layer:", L.heatLayer);
    //     useEffect(() => {
    //         const heatPoints = reports.map((report) => [
    //             report.coordinates[0],
    //             report.coordinates[1],
    //             0.8
    //         ]);

    //         const heatLayer = L.heatLayer(heatPoints,{
    //             radius: 35,
    //             blur: 25,
    //             maxZoom: 17,
    //             gradient: {
    //                 0.2: "blue",
    //                 0.4: "lime",
    //                 0.6: "yellow",
    //                 1.0: "red"
    //             }
                
    //         });
            
    //         heatLayer.addTo(map);

    //         return() => {
    //             map.removeLayer(heatLayer);
    //         };


    //     } ,[map,reports]);

    //     return null;
    // };

    return (
        <>
            
        <div className="container-fluid px-3 px-md-4  col-12">
          <div className="d-flex flex-column flex-md-row 
                          justify-content-between align-items-md-center 
                          gap-3 mb-4  ">

            
         <div className="d-flex justify-content-between align-items-center mb-3 col-12">
           <div className="live-badge d-inline-flex align-items-center gap-2">
             <span className="live-dot"></span>
             <span>Live Monitoring</span>
           </div>

           <div className="text-end">
             <h2 className="incident-title mb-1">
               Incident Map
             </h2>

             <p className="incident-subtitle mb-0">
               Monitor and track incidents across the city
             </p>
           </div>

         </div>


          </div>

          </div>
        

                      
         <div className="row g-3 mb-4">
            <div className="row g-3 mb-3">
                <div className="map-layer-selector mb-3">
                    <h6>Map Layers</h6>
                    <div className="d-flex flex-wrap gap-2">
                        <button className={`btn ${
                            mapLayer === "Normal"
                            ? "btn-primary"
                            : "btn-outline-secondary"
                        }`}
                        onClick={() => setMapLayer("Normal")}

                        >
                            Normal Markers

                        </button>

                        <button className={`btn ${
                            mapLayer === "Cluster"
                            ? "btn-primary"
                            : "btn-outline-secondary"
                        }`}
                        onClick={() => setMapLayer("Cluster")}

                        >
                            Cluster

                        </button>

                        <button
                            className={`btn ${mapLayer === "Heatmap" ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() => setMapLayer("Heatmap")}
                        >
                            Heatmap
                        </button>

                    </div>
                </div>

      </div>


          <div className="col-12 col-sm-6 col-xl-3">
            <div className="severity-card critical-card">
                <div>
                <h2>{CriticalCount}</h2>
                <p>Critical</p>
                </div>
            </div>
          </div>
           
            <div className="col-12 col-sm-6 col-xl-3">
                <div className="severity-card high-card">
                <div>
                <div>
                    <h2>{HighCount}</h2>
                    <p>High</p>
                </div>
        
                </div>
                </div>
            </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div className="severity-card medium-card">
                <div>
                <h2>{MediumCount}</h2>
                <p>Medium</p>
                </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
              <div className="severity-card low-card">
                <div>
                  <h2>{LowCount}</h2>
                  <p>Low</p>
                </div>
              </div>
          </div>
 
          <div className="Incident Distribution">
            <div>
                
                <h3>Incident Distribution</h3>
            </div>
            <div className="Map Filters">
                <div>
                    <p>All Categories</p>
                    <h6>Map Filters</h6>
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

                <div className="map-container">
  <MapContainer
    center={[30.0444, 31.2357]}
    zoom={11}
    scrollWheelZoom={true}
    style={{ height: "500px", width: "100%" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {mapLayer === "Normal" ? (
    renderMarkers()
      ) : mapLayer === "Cluster" ? (
    <MarkerClusterGroup chunkedLoading>
        {renderMarkers()}
    </MarkerClusterGroup>
       ) : (
    <HeatmapLayer reports={filteredMapReports} />
      )}
         </MapContainer>
    </div>





            </div>

          </div>


      </div>


        </>
    )
}
export default LiveMap;