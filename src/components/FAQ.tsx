import Accordion from "./Accordion";
import React from "react";

const FAQ = ()=> {
    return ( 
    <div className=" p-4 bg-gray-200 rounded-lg">
        <Accordion title='Do you prefer Android or IOS' answer='I like to use products' />
        <Accordion title='Do you prefer Writing CSS or Tailwind' answer='I like to use Tailwind' />
        <Accordion title='Firebase or Supabase' answer='I am using Supabase!' />
        <Accordion title='Do your prefer Indomie or KFC' answer='Dude I love Indomie!' />
    </div>
    );
};

export default FAQ;