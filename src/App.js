import React from 'react';
import { Container, Title, createTheme, MantineProvider } from '@mantine/core';
import Table1 from './components/Table1';
import Table2 from './components/Table2';

const App = () => {

  const theme = createTheme({

  });
  return (

    <MantineProvider theme={theme}>
    <Container>
      <Title order={1}>Indian Agriculture Analytics</Title>
      <Title order={2}>Table 1: Yearly Crop Production</Title>
      <Table1 /><br />
      <Title order={2}>Table 2: Crop Averages (1950-2020)</Title>
      <Table2 />
    </Container>
    </MantineProvider>

  );
};

export default App;
