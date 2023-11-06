import { useMemo } from "react";
import { useTable } from "react-table";
import JSON_DATA from "./../../../public/food.json"
import{COLUMNS} from "./../../components/Columns/Columns"
const ManageMyFood = () => {
 const columns = useMemo(()=> COLUMNS,[])
 const data = useMemo(()=> JSON_DATA,[])
 const tableInstance =  useTable({
       columns,
        data
    })

    const{getTableProps, getTableBodyProps, headerGroups,rows,prepareRow}=tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroups)=>(
                        <tr key={headerGroups.id} {...headerGroups.getHeaderGroupProps()}>
                        
                        {
                            headerGroups.headers.map(column =>(
                                <th key={column.id} {...column.getHeaderGroupProps()}>{column.render("Header")}</th>
                            ))
                        }
                       
                    </tr>
                    )) }
               
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row)=>{
                        prepareRow(row)
                        return(
                            <tr key={row.id} {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>{
                                       return <td key={cell.id} {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    })
                                }
                           
                            </tr>    
                        )
                    })
                }
               
           </tbody>
        </table>
    );
};

export default ManageMyFood;