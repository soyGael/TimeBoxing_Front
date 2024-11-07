import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light position-absolute"
      style={{ width: "250px", height: "100vh" }}
    >
      <h3 className="text-center">Usuario Genérico</h3>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Actividad 1
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Actividad 2
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Actividad 3
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Actividad 4
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Actividad 5
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
