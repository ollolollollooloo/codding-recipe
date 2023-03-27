import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TechCard from './TechCard'
import Grid from '@mui/material/Unstable_Grid2';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Wizard({ data }: any) {
  const { tabsdata, stack } = data
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("new", newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabsdata.map((tabname: any, key: any) => (
            <Tab key={key} label={tabname} {...a11yProps(key)} />
          ))}
        </Tabs>
      </Box>
      {tabsdata.map((tabname: any, key: any) => (
        <TabPanel value={value} key={key} index={key}>
          <Grid container spacing={2}>
            {stack[tabname.replace(/\s+/g, '_').toLowerCase()].map((data: any, ke: number) => {
              return <Grid md={3} key={`tech-stack-${data}`}>
                <TechCard data={{ src: data, tabname }} />
              </Grid>
            })}
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
}