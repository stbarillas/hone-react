import React from "react";
import {DataTable, TableHeader} from "react-mdl";
import "./table.css"

// Takes dates and days as properties to render dynamic table with correct number of rows
function RenderTable(props) {
    // Reverses dates in order to display most recent date at the top of the table
    let dates = Object.keys(props.dates).reverse(),
        // Creates empty output list that will get populated below
        outputlist = [];
    // Iterate through dates, creating an object each time that is pushed to outputList
    for (let i = 0; i < props.days; i++) {
        let outputDict = {},
            date = dates[i],
            price = props.dates[date];
        outputDict.date = date;
        outputDict.price = price;
        // Populates outputList with object
        outputlist.push(outputDict);
    }
    return(
        <div>
            <h1 id={"tableTitle"}>Price Table</h1>
            <DataTable shadow={0} rows={outputlist} align={"center"}>
                <TableHeader name="date" tooltip="The amazing material name">Date</TableHeader>
                <TableHeader numeric name="price" tooltip="Price per unit">Price (USD)</TableHeader>
            </DataTable>
        </div>

    )
}


export default (RenderTable);