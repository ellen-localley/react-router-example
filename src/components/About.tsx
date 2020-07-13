import React from "react";
import {AboutMenu, PageTemplate, Company, History, Services} from './index'
import {Route} from "react-router";

const About = ({match}) => <PageTemplate>
    <section className="about">
        <Route component={AboutMenu}/>
        <Route path={"/about/company"} component={Company}/>
        <Route path={"/about/history"} component={History}/>
        <Route path={"/about/services"} component={Services}/>
    </section>
</PageTemplate>
export default About