import React,{useMemo, useState} from 'react';
import "./Table.scss"
import Pagination from './Pagination';
import data from "../data/mock-data.json"


let PageSize = 10;


const Table = () => {

    const [currentPage, setCurrentPage] = useState(1);


       const currentTableData  = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);


  return (
    <div>
        <div className='container'>
            <div className='table_content'>
        <table className='Main_table'>
            <thead className='table_head'>
                <tr>
                <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
                </tr>
            </thead>
            <tbody className='table_body'>
                {
                    currentTableData.map((item, index) => (
                        <tr key = {index}>
                <td className='srno'>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                </tr>
                    )
                    )
                }
            </tbody>
        </table>
        </div>
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
        </div>
    </div>
  )
}

export default Table