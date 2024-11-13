"use client";
import React, { useState } from "react";
import notes from "./data/qbData"; // Adjust the path as per your project structure
import "./qb.css";
import { PageWrapper } from "../page-wrapper";
import Buttons from "./buttons";

const Notes = () => {
  const [filters, setFilters] = useState({
    department: "All",
    semester: "All",
    subject: "All",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredNotes = notes.filter((note) => {
    const { department, semester, subject } = filters;
    return (
      (department === "All" || note.department === department) &&
      (semester === "All" || note.semester === semester) &&
      (subject === "All" || note.subject === subject)
    );
  });

  const renderFilterOptions = (name, options) => (
    <select
      className="filter-select"
      name={name}
      value={filters[name]}
      onChange={handleFilterChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );

  return (
    <PageWrapper>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="middleTitle">Question Bank</h1>
        </div>
        {/* <Buttons /> */}
        <div className="filter-list-container">
          <h3>Year</h3>
          {renderFilterOptions("department", ["All", "FY", "Comps", "AI-DS"])}
          <h3>Semester</h3>
          {renderFilterOptions("semester", ["All", "Sem1", "Sem2", "Sem3", "Sem4"])}
          <h3>Subject</h3>
          {renderFilterOptions("subject", ["All", "DBMS", "ML", "OS"])}
        </div>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotes.map((note) => (
              <tr key={note.id}>
                <td>
                  <a
                    href={note.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {note.title}
                  </a>
                </td>
                <td>{note.department}</td>
                <td>{note.semester}</td>
                <td>{note.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export default Notes;