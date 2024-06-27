# Indian Agriculture Analytics Project

This project is designed to analyze and display data from the Indian Agriculture dataset provided by the National Data and Analytics Platform, NITI Aayog. It includes two tables:

1. **Table 1: Yearly Crop Production**
   - Displays the crop with maximum and minimum production for each year from 1950 to 2020.

2. **Table 2: Crop Averages (1950-2020)**
   - Shows the average yield and average cultivation area for each crop between 1950 and 2020.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your local machine
- Yarn package manager (instead of npm)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/JosephKS10/Manufac-Analytics-Agriculture-Analytics.git
   cd agriculture-analytics
   ```

2. Install dependencies using Yarn
  ```bash
  yarn install
   ```

### Running the Project

```bash
  yarn start
   ```

### Project Structure

1. /src: Contains all the source code files.
    - /components: React components used to display tables.
    - /data.json: JSON file containing the agriculture dataset.
    - /Table1.css: CSS file for Table1 component styling.
    - /Table2.css: CSS file for Table2 component styling.
    - /App.js: Main component to render tables and provide Mantine theme.
