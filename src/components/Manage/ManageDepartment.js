import Title from "../Title/Title";
import { Link } from 'react-router-dom';
import useFetch from "../../custom-hooks/useFetch";

import DeparmentRow from "./DepartmentRow";

import { useHistory } from "react-router";


const ManageDepartment = () => {

    const history = useHistory();

    const { data: departments } = useFetch("http://localhost:3000/departments");

    const handleDeleteDepartment = (id) => {
        fetch('http://localhost:3000/departments/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.go();
        })
    }

    return (
        <div className="manage-main">

            <Title title={"Manage Departments"} />

            <div className="manage-filter-btn d-flex justify-space-between align-center">
                <div className="add-btn d-flex">
                    <Link className="btn btn-lipstick mn-w185" to="/adddepartment">Add Department</Link>
                </div>
            </div>

            <div className="details-table">
                <table className="table">
                    <thead className="thead">
                        <tr className="tr">
                            {/* <th className="th">ID</th> */}
                            <th className="th">Deparment</th>
                            <th className="th">Edit</th>
                            {/* <th className="th">Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments && departments.map((row) => (
                                <DeparmentRow key={row.id} departments={row} handleDeleteDepartment={handleDeleteDepartment} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default ManageDepartment;