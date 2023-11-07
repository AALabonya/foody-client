/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const COLUMNS = [
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
        Header: 'Food Status',
        accessor: 'foodStatus',
        Cell: ({ cell: { value } }) => {
            const cellStyle = {
                padding: '8px', // Adjust padding as needed
                borderRadius: '4px', // Add some border-radius for a rounded look
                color: 'white', // Text color
                textAlign: 'center', // Center the text
                backgroundColor: value === 'available' ? 'green' : 'red',
            };

            return (
                <div style={cellStyle}>
                    {value}
                </div>
            );
        }
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ cell: { row } }) => (
            <div className="flex">
                <button className="bg-blue-600 px-2 py-1 rounded-md mr-2 font-semibold text-white" onClick={() => handleEdit(row)}>Edit</button>
                <button className="bg-red-600 px-2 py-1 rounded-md mr-2 ml-2 font-semibold text-white" onClick={() => handleDelete(row)}>Delete</button>
                <button className=" bg-emerald-600 px-2 py-1 rounded-md font-semibold text-white" onClick={() => handleManage(row)}>Manage</button>
            </div>
        ),
    }
];