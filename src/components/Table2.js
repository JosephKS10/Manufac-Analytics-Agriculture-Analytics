import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';

const Table2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file when component mounts
    fetch('/data.json')
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        const processedData = processData(data); // Process data to calculate average yield and area
        setData(processedData); // Update state with processed data
      });
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  // Function to process data and calculate average yield and area
  const processData = (data) => {
    const cropData = {};

    data.forEach((item) => {
      const crop = item['Crop Name']; // Get crop name
      const yieldVal = parseFloat(item['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']) || 0; // Parse yield value or default to 0
      const area = parseFloat(item['Area Under Cultivation (UOM:Ha(Hectares))']) || 0; // Parse area value or default to 0

      if (!cropData[crop]) {
        // If crop data doesn't exist, initialize it
        cropData[crop] = {
          totalYield: yieldVal,
          totalArea: area,
          count: 1,
        };
      } else {
        // Update total yield, area, and count for the crop
        cropData[crop].totalYield += yieldVal;
        cropData[crop].totalArea += area;
        cropData[crop].count += 1;
      }
    });

    // Convert cropData object to array of objects for rendering
    return Object.keys(cropData).map((crop) => ({
      crop,
      avgYield: (cropData[crop].totalYield / cropData[crop].count).toFixed(3), // Calculate average yield rounded to 3 decimal places
      avgArea: (cropData[crop].totalArea / cropData[crop].count).toFixed(3), // Calculate average area rounded to 3 decimal places
    }));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (1950-2020)</th>
          <th>Average Cultivation Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody>
        {/* Render table rows based on processed data */}
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.crop}</td>
            <td>{row.avgYield}</td>
            <td>{row.avgArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Table2;
