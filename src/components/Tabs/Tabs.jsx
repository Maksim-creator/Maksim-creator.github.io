import React from 'react'
import { TabList, Tab, Tabs, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import ForParents from '../TabsContent/ForParents/ForParents'
import AboutMe from '../AboutMe/AboutMe'
import EducationalWork from '../TabsContent/EducationalWork/EducationalWork'
import InclusiveEducation from '../TabsContent/InclusiveEducation/InclusiveEducation'
import Camp from '../TabsContent/Camp/Camp'

const TabsNavigation = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Батькам</Tab>
                <Tab>Будьмо знайомі</Tab>
                <Tab>Виховна робота</Tab>
                <Tab>Інклюзивне навчання</Tab>
                <Tab>Табір відпочинку</Tab>
            </TabList>
            <TabPanel>
                <ForParents />
            </TabPanel>
            <TabPanel>
                <AboutMe />
            </TabPanel>
            <TabPanel>
                <EducationalWork />
            </TabPanel>
            <TabPanel>
                <InclusiveEducation />
            </TabPanel>
            <TabPanel>
                <Camp />
            </TabPanel>
        </Tabs>
    )
}

export default TabsNavigation
