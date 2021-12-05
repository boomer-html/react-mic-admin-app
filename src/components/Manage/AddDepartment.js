import Title from '../Title/Title';
import { useState } from 'react';
import { useHistory } from 'react-router';
import useFetch from '../../custom-hooks/useFetch';


const AddDepartment = () => {
    const [departmentName, setDepartmentName] = useState('');
    const history = useHistory();

    const { data: departments } = useFetch('http://localhost:3000/departments');


    const handleSubmit = (e) => {
        e.preventDefault();

        const department = { "department_name": departmentName };

        const departmentExists = (department) => {
            return departments.some(function (el) {
                return el.department_name === department;
            });
        }

        if (!departmentExists(departmentName)) {

            fetch('http://localhost:3000/departments', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(department)
            }).then(() => {
                alert(`New Department ${departmentName} has been added successfully`);
                history.push('/managedepartments');
            });
        } else {
            alert(`${departmentName} already exists`)
        }
    }

    return (
        <div className="add-form">
            <Title title={'Add Department'} />

            <form onSubmit={handleSubmit}>
                <div className="form-input-group">
                    <label className="form-input-label">Department</label>
                    <input required type="text" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} className="form-input" placeholder="Enter Department Name" />
                </div>

                <div className="form-submit-button">
                    <button type="submit" className="btn btn-lipstick mn-w145">Add</button>
                </div>
            </form>

        </div>
    )
}

export default AddDepartment;