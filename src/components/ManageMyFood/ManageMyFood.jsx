import { useMemo } from "react";
import { useTable } from "react-table";
import{COLUMNS} from "./../../components/Columns/Columns"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const ManageMyFood = () => {
const {user} =useContext(AuthContext)
const email =user?.email
const[myFood , setMyFood] =useState([])

   useEffect(()=>{
	axios.get(`http://localhost:5000/manageFood/${email}`, {withCredentials: true})
	.then(res =>setMyFood(res.data))
   },[email])

console.log(myFood);
 const columns = useMemo(()=> COLUMNS,[])

 const data = useMemo(()=> myFood,[myFood])
 const tableInstance =  useTable({
       columns,
        data
    })

    const{getTableProps, getTableBodyProps, headerGroups,rows,prepareRow}=tableInstance
    return (
        <div>
            <h1 className="font-bold text-center text-4xl mt-5 mb-5">Manage My food 
             <span className="font-semibold text-base ml-2">[React-Table]</span>
            </h1>

            <table {...getTableProps()} className="table">
            
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr key={row.id}  {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td key={cell.id}  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>

    )
};



export default ManageMyFood;