import { FirstList } from "./firstlist/FirstList";
import { InfoCard } from "./infoCard/InfoCards";
import { Fond } from "./fond/Fond";


import { Form } from "./form/Form";
import { Blogs } from "./blog/Blogs";


import { Faq } from "./information/questions/Faq";
import { AboutCompany } from "./information/aboutCompany/AboutCompany";
import { Exchangeer } from "./information/exchangers/Exchangers";

function Main (){
    return <>
        <FirstList />
        <InfoCard />
        <Fond />
        <AboutCompany />
        <Exchangeer />
        <Faq />

        <Form/>
        <Blogs />


    </>
}

export {Main};