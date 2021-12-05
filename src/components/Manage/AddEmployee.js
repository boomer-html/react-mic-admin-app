import { useState } from 'react';
import Title from '../Title/Title';
import { useHistory } from 'react-router';
import useFetch from '../../custom-hooks/useFetch';

const AddEmployee = () => {

    const [employeeName, setEmployeeName] = useState('');
    const [departmentName, setDepartmentName] = useState('');

    const history = useHistory();

    const { data: departments } = useFetch('http://localhost:3000/departments');

    const handleSubmit = (e) => {
        e.preventDefault();

        const employee = { "employee_name": employeeName, "department": departmentName };

        fetch('http://localhost:3000/employees', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        }).then(() => {
            alert(`New Employee ${employeeName} has been added in ${departmentName} department successfully`);
            history.push('/manageemployees');
        });
    }

    return (
        <div className="add-form">
            <Title title={'Add Employee'} />

            <form onSubmit={handleSubmit}>
                <div className="form-input-group">
                    <label className="form-input-label">Employee Name</label>
                    <input value={employeeName} required onChange={(e) => setEmployeeName(e.target.value)} type="text" className="form-input" placeholder="Enter Employee Name" />
                </div>

                <div className="form-input-group">
                    <label className="form-input-label">Department</label>
                    <select value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} className="form-input-select">
                        <option value='' disabled>Select Department</option>
                        {departments && departments.map((val) =>
                        (
                            <option key={val.id} value={val.department_name}>{val.department_name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-submit-button">
                    <button type="submit" className="btn btn-lipstick mn-w145">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee;