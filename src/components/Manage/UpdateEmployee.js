import Title from "../Title/Title";

import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "../../custom-hooks/useFetch";


const UpdateEmployee = () => {

    const { data: departments } = useFetch('http://localhost:3000/departments');

    const { id } = useParams();
    const history = useHistory();

    const [employeeName, setEmployeeName] = useState('');
    const [departmentName, setDepartmentName] = useState('');

    const { data: employee } = useFetch('http://localhost:3000/employees/' + id);


    const handleDelete = () => {
        fetch('http://localhost:3000/employees/' + employee.id, {
            method: 'DELETE'
        }).then(() => {
            alert('Employee Deleted Successfully');
            history.push('/manageemployees');
        })
    }

    useEffect(() => {
        employee && setEmployeeName(employee.employee_name);
        employee && setDepartmentName(employee.department);
    }, [employee])

    return (
        <div className="add-form">

            <Title title={'Edit Employee Details'} />


            <div className="form-input-group">
                <label className="form-input-label">Employee Name</label>
                <input value={employeeName} required onChange={(e) => setEmployeeName(e.target.value)} type="text" className="form-input" placeholder="Enter Employee Name" />
            </div>

            <div className="form-input-group">
                <label className="form-input-label">Department</label>
                <select value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} className="form-input-select">
                    {departments && departments.map((val) =>
                    (
                        <option key={val.id} value={val.department_name}>{val.department_name}</option>
                    ))}
                </select>
            </div>

            <div className="form-submit-button d-flex">
                <button type="button" className="btn btn-lipstick mn-w145 mr-12">Update</button>
                <button type="button" onClick={handleDelete} className="btn btn-secondary mn-w145">Delete</button>

            </div>
        </div>
    )
}

export default UpdateEmployee;