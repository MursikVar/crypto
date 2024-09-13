import { Blogs } from "./blog/Blogs";
import { FirstList } from "./firstlist/FirstList";
import { Fond } from "./fond/Fond";
import { InfoCard } from "./infoCard/InfoCards";
// import { Form } from "./form/Form";

function Main (){
    return <>
        <FirstList />
        <InfoCard />
        <Fond />
        {/* <Form /> */}
        <Blogs />
    </>
}

export {Main};