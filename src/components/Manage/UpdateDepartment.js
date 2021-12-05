import useFetch from "../../custom-hooks/useFetch";
import Title from "../Title/Title";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react";

const UpdateDepartment = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data: department } = useFetch('http://localhost:3000/departments/' + id);

    const handleDelete = () => {
        fetch('http://localhost:3000/departments/' + department.id, {
            method: 'DELETE'
        }).then(() => {
            alert('Department Deleted Successfully');
            history.push('/managedepartments');
        })
    }

    const handleUpdate = () => {

        const departmentObj = { "department_name": departmentName };

        fetch('http://localhost:3000/departments/' + department.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(departmentObj)
        }).then(() => {
            alert('Department Updated Successfully');
            history.push('/managedepartments');
        });
    }

    const [departmentName, setDepartmentName] = useState('');
    useEffect(() => {
        department && setDepartmentName(department.department_name)
    }, [department])

    return (
        <div className="add-form">
            <Title title={'Edit Department Details'} />

            <div className="form-input-group">
                <label className="form-input-label">Department</label>
                <input required type="text" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} className="form-input" placeholder="Enter Department Name" />
            </div>

            <div className="form-submit-button d-flex">
                <button type="button" onClick={handleUpdate} className="btn btn-lipstick mn-w145 mr-12">Update</button>
                <button type="button" onClick={handleDelete} className="btn btn-secondary mn-w145">Delete</button>
            </div>

        </div>
    )
}

export default UpdateDepartment;