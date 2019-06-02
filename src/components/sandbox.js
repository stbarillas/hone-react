// import {DataTable, TableHeader} from "react-mdl";
// import React from "react";
//
// renderTable(dict, days) {
//     console.log(dict);
//     console.log(days)
//     let list = [],
//         dates = Object.keys(dict);
//     for (let i = 1; i < days; i++) {
//         let outputDict = {},
//             date = dates[i],
//             price = dict[date];
//         outputDict.date = date;
//         outputDict.price = price;
//         list.push(outputDict);
//     }
//     return (
//         <DataTable shadow={0} rows={list}>
//             <TableHeader name="date" tooltip="The amazing material name">Date</TableHeader>
//             <TableHeader numeric name="price" tooltip="Price per unit">Price</TableHeader>
//         </DataTable>
//     )
// }
//
// // API call function
// fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
// // Converts API response to json
//     .then(function (response) {
//         return response.json();
//     })
//     // Calls render functions with bci object and days as parameters. Defaults to 31 days
//     .then(function (data) {
//         let priceDict = data["bpi"];
//         let results = renderTable(priceDict, 31);
//         this.setState({api: results})
//     })
//     // Displays error if API call is unsuccessful
//     .catch(function (err) {
//         console.log("API fetch was unsuccessful");
//         console.log(err);
//     })