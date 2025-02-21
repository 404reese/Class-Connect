"use client";

import React, { useState } from "react";
import { PageWrapper } from "../page-wrapper";
import compsData from "./data/comps";
import aiDsData from "./data/aids";
import itData from "./data/it";
import extcData from "./data/extc";
import fyData from "./data/fy";
import allData from "./data/all";
import "../notes/notes.css";
import Buttons from "./buttons";

const notes = [...allData, ...fyData, ...aiDsData, ...compsData, ...itData, ...extcData];

const Notes = () => {
  const [filterDepartment, setFilterDepartment] = useState("All");
  const [filterSemester, setFilterSemester] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");

  const handleFilterDepartmentChange = (e) => {
    setFilterDepartment(e.target.value);
  };

  const handleFilterSemesterChange = (e) => {
    setFilterSemester(e.target.value);
  };

  const handleFilterSubjectChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const filteredNotes = notes.filter((note) => {
    return (
      (filterDepartment === "All" || note.department === filterDepartment) &&
      (filterSemester === "All" || note.semester === filterSemester) &&
      (filterSubject === "All" || note.subject === filterSubject)
    );
  });

  return (
    <PageWrapper>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1 className="middleTitle">Notes</h1>
        </div>
        <Buttons />
        <div className="filter-list-container">
          <h3 style={{ paddingTop: "10px" }}>Filters</h3>
          <select value={filterDepartment} onChange={handleFilterDepartmentChange} className="filter-select">
            <option value="All">All Departments</option>
            <option value="FY">FY</option>
            <option value="COMPS">Comps</option>
            <option value="AIDS">AI-DS</option>
            <option value="IT">IT</option>
            <option value="EXTC">EXTC</option>
          </select>
          <select value={filterSemester} onChange={handleFilterSemesterChange} className="filter-select" >
            <option value="All">All Semesters</option>
            <option value="Sem1">Sem1</option>
            <option value="Sem3">Sem3</option>
          </select>
          <select value={filterSubject} onChange={handleFilterSubjectChange}className="filter-select">
            <option value="All">All Subjects</option>
            <option value="BEE">BEE</option>
            <option value="EC">Engineering Chemistry</option>
            <option value="EM-1">Maths 1</option>
            <option value="EM">Mechanics</option>
            <option value="EP">Engineering Physics</option>
            <option value="Maths">Maths III</option>
            <option value="DS">DS</option>
            <option value="DSGT">DSGT</option>
            <option value="DLCA">DLCA</option>
            <option value="DBMS">DBMS</option>
            <option value="DAA">DAA</option>
            <option value="DSA">DSA</option>
            <option value="OOPM">OOPM</option>
            <option value="DSDS">DSDS</option>
            <option value="DLD">DLD</option>
            <option value="EDC">EDC</option>
            <option value="MC">MC</option>
            <option value="COA">COA</option>
            <option value="SE">Soft Engg.</option>
          </select>
        </div>
        <table className="notes-table">
          <thead>
            <tr>
              <th>Note</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Subject</th>
              <th>Shared By</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotes.map((note) => (
              <tr key={note.id}>
                
                <td>
                  <a href={note.link} target="_blank" rel="noopener noreferrer">
                    {note.note}
                  </a>
                </td>
                <td><a href={note.link} target="_blank" rel="noopener noreferrer">{note.department}</a></td>
                <td><a href={note.link} target="_blank" rel="noopener noreferrer">{note.semester}</a></td>
                <td><a href={note.link} target="_blank" rel="noopener noreferrer">{note.subject}</a></td>
                <td style={{ color: "grey" }}><a href={note.link} target="_blank" rel="noopener noreferrer">{note.name}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export default Notes;
