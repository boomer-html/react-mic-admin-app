import { Link } from "react-router-dom";

const DeparmentRow = ({ departments, handleDeleteDepartment }) => {
    return (
        <tr className="tr">
            {/* <td className="td">{departments.id}</td> */}
            <td className="td">{departments.department_name}</td>
            <td className="td"><Link to={`updatedepartment/${departments.id}`} className="table-btn table-btn--primary">Edit</Link></td>
            {/* <td className="td"><button onClick={() => handleDeleteDepartment(departments.id)} className="table-btn table-btn--danger">Delete</button></td> */}
        </tr>
    );
}

export default DeparmentRow;