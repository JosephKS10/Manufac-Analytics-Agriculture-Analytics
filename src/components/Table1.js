import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import './Table1.css'; // Import CSS file for styling

const Table1 = () => {
  const [data, setData] = useState([]); // State to store processed data

  useEffect(() => {
    // Fetch data from JSON file when component mounts
    fetch('/data.json')
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        const processedData = processData(data); // Process data to find max and min crop production per year
        setData(processedData); // Update state with processed data
      });
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  // Function to process data and find max and min crop production per year
  const processData = (data) => {
    const yearData = {};

    data.forEach((item) => {
      const year = item.Year.match(/\d{4}/)[0]; // Extract year from "Year" field
      const crop = item['Crop Name']; // Get crop name
      const production = parseFloat(item['Crop Production (UOM:t(Tonnes))']) || 0; // Parse production value or default to 0

      if (!yearData[year]) {
        // If year data doesn't exist, initialize it
        yearData[year] = {
          maxCrop: crop,
          maxProduction: production,
          minCrop: crop,
          minProduction: production,
        };
      } else {
        // Update max and min crop production for the year
        if (production > yearData[year].maxProduction) {
          yearData[year].maxCrop = crop;
          yearData[year].maxProduction = production;
        }
        if (production < yearData[year].minProduction) {
          yearData[year].minCrop = crop;
          yearData[year].minProduction = production;
        }
      }
    });

    // Convert yearData object into an array of objects for rendering
    return Object.keys(yearData).map((year) => ({
      year,
      maxCrop: yearData[year].maxCrop,
      minCrop: yearData[year].minCrop,
    }));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>
        {/* Render table rows based on processed data */}
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{row.maxCrop}</td>
            <td>{row.minCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Table1;
