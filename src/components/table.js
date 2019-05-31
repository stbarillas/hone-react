import React from "react";
import {DataTable, TableHeader} from "react-mdl";

class Table extends React.Component {
    render() {
        return (
            <DataTable
                shadow={0}
                rows={[
                    {date: '1', price: 2.90},
                    {date: '2', price: 1.25},
                    {date: '3', price: 2.35}
                ]}
            >
                <TableHeader name="date" tooltip="The amazing material name">Date</TableHeader>
                <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="BPI Price">Price (USD)</TableHeader>
            </DataTable>
        );
    }
}


export default (Table);