import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Header.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="banner">
        <h1>  ABC News</h1>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="News" {...a11yProps(0)} />
            <Tab label="Sport" {...a11yProps(1)} />
            <Tab label="Finance" {...a11yProps(2)} />
            <Tab label="Politics" {...a11yProps(3)} />
            <Tab label="Travel" {...a11yProps(4)} />
            <Tab label="Life" {...a11yProps(5)} />
            <Tab label="Tech" {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>

        </TabPanel>
        <TabPanel value={value} index={2}>

        </TabPanel>
        <TabPanel value={value} index={3}>

        </TabPanel>
        <TabPanel value={value} index={4}>

        </TabPanel>
        <TabPanel value={value} index={5}>

        </TabPanel>
        <TabPanel value={value} index={6}>

        </TabPanel>
      </div>
    </div>
  );
}
