import Accordion from "./Accordion";
import React from "react";

const FAQ = ()=> {
    return ( 
    <div className=" p-4 bg-gray-200 rounded-lg">
        <Accordion title='Apakah pembayaran bisa dilakukan secara offline?' answer='Silahkan datang langsung ke lokasi dan pergi ke loket penjualan' />
        <Accordion title='Apa saja keuntungan membeli melalu website EVENTKU?' answer='Dapatkan point setiap pembelian tiket event melalui eventku dan tukar dengan
        bermacam hadiah' />
        <Accordion title='Apakah tiket yang dibeli bisa dikembalikan?' answer='Tiket yang sudah dibeli tidak dapat dikembalikan' />
        <Accordion title='Bagaimana cara menukar point' answer='Silahkan pergi ke halaman blog' />
    </div>
    );
};

export default FAQ;