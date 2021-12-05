import { Link } from "react-router-dom";

const DetailRow = ({ employees, handleDeleteEmployee }) => {
    return (
        <tr className="tr">
            {/* <td className="td">{employees.id}</td> */}
            <td className="td">{employees.employee_name}</td>
            <td className="td">{employees.department}</td>
            <td className="td"><Link to={`updateemployee/${employees.id}`} className="table-btn table-btn--primary">Edit</Link></td>
            {/* <td className="td"><button className="table-btn table-btn--danger" onClick={
                () => {
                    handleDeleteEmployee(employees.id)
                }
            }>Delete</button></td> */}
        </tr >
    );
}

export default DetailRow;