import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>About US</h2>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
