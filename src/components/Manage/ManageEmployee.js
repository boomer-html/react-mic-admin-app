import Title from "../Title/Title";
import { Link, useHistory } from 'react-router-dom';

import DetailRow from "./DetailRow";
import useFetch from "../../custom-hooks/useFetch";
import { useState, useEffect } from "react";

const ManageEmployee = () => {
    const history = useHistory();
    const [department, setDepartment] = useState('');

    const { data: employees } = useFetch("http://localhost:3000/employees");
    const { data: departments } = useFetch('http://localhost:3000/departments');

    const [employeesData, setEmployeesData] = useState(null);


    const handleDeleteEmployee = (id) => {
        fetch('http://localhost:3000/employees/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.go();
        })
    }

    useEffect(() => {
        setEmployeesData(employees);
    }, [employees]);

    const handleFilter = (option) => {
        if (option !== 'all') {
            const filterData = employees.filter((obj) => {
                return obj.department === option;
            });
            setEmployeesData(filterData);
        } else {
            setEmployeesData(employees);
        }
    }

    return (
        <div className="manage-main">

            <Title title={'Manage Employees'} />

            <div className="manage-filter-btn d-flex justify-space-between align-center">
                <div className="add-btn d-flex">
                    <Link className="btn btn-lipstick mn-w185" to="/addemployee">Add Employee</Link>
                </div>
                <div className="filter-btn d-flex align-center">
                    <span className="filter-text">Filter By Department: </span>
                    <select value={department} onChange={(e) => {
                        setDepartment(e.target.value);
                        handleFilter(e.target.value);
                    }} className="filter-dd">
                        <option value="all">All</option>
                        {departments && departments.map((department) => (
                            <option key={department.id} value={department.department_name}>{department.department_name}</option>
                        ))}
                    </select>
                </div>

            </div>

            <div className="details-table">
                <table className="table">
                    <thead className="thead">
                        <tr className="tr">
                            {/* <th className="th">ID</th> */}
                            <th className="th">Employee Name</th>
                            <th className="th">Department</th>
                            <th className="th">Edit</th>
                            {/* <th className="th">Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeesData && employeesData.map((row) => (
                                <DetailRow key={row.id} handleDeleteEmployee={handleDeleteEmployee} employees={row} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageEmployee;