/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useMemo } from "react";
import { useTable } from "react-table";

import { useState } from "react";
import { useEffect } from "react";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hooks/useAxios";


const ManageMyFood = () => {
  const { user } = useContext(AuthContext)
  const email = user?.email
  const [myFood, setMyFood] = useState([])
  const axios =useAxios()

  useEffect(() => {
    axios.get(`/manageFood/${email}`, { withCredentials: true })
      .then(res => setMyFood(res.data))
  }, [axios,email])

  console.log(myFood);


  const COLUMNS = [
    {
      Header: 'Food Name',
      accessor: 'foodName',
    },
    {
      Header: 'Food Image',
      accessor: 'foodImage',
      Cell: ({ cell: { value } }) => (
        <img src={value} alt="Food" width="50" height="50" className="rounded-md" />
      )
    },
    {
      Header: 'Food Quantity',
      accessor: 'foodQuantity',
    },
    {
      Header: 'Pickup Location',
      accessor: 'pickupLocation',
    },
    {
      Header: 'Expired Date',
      accessor: 'expiredDate',
    },
    {
      Header: 'Additional Notes',
      accessor: 'additionalNotes',
    },
    {
      Header: 'Donator Image',
      accessor: 'donatorImage',
      Cell: ({ cell: { value } }) => (
        <img src={value} alt="Food" width="50" height="50" className="rounded-md" />
      )
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ row }) => (

        <div className="flex">
          <button className="bg-blue-600 px-2 py-1 rounded-md mr-2 font-semibold text-white">
         <Link to={`/updateManageFood/${row.original._id}`}>Edit</Link>
            </button>
          <button className="bg-red-600 px-2 py-1 rounded-md mr-2 ml-2 font-semibold text-white" onClick={() => handleDelete(row.original._id)}>
            Delete</button>
          <button className=" bg-emerald-600 px-2 py-1 rounded-md font-semibold text-white">
            <Link to={`/manageSingleFood/${row.original._id}`}>Manage</Link></button>
        </div>
      ),
    }
  ];

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // const foodId= _id.original._id
        axios.delete(`http://localhost:5000/getFood/${_id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Request has been deleted.", "success")
              setMyFood((prevFoods)=>
               prevFoods.filter((food)=>food._id !== _id)
              )
            }
          })
      }
    })

  }


  const columns = useMemo(() => COLUMNS, [])

  const data = useMemo(() => myFood, [myFood])
  const tableInstance = useTable({
    columns,
    data
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
  return (
    <div>
      <Helmet><title>Foody | Manage My Food</title></Helmet>
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