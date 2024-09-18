import { FirstList } from "./firstlist/FirstList";
import { InfoCard } from "./infoCard/InfoCards";
import { Fond } from "./fond/Fond";

import { Form } from "./form/Form";
import { Blogs } from "./blog/Blogs";


import { AboutCompany } from "./information/aboutCompany/AboutCompany";
import { Exchangeer } from "./information/exchangers/Exchangers";
// import { Faq } from "./information/questions/Form";

function Main (){
    return <>
        <FirstList />
        <InfoCard />
        <Fond />
        <AboutCompany />
        <Exchangeer />

        <Form/>
        <Blogs />


        {/* <Faq /> */}
    </>
}

export {Main};