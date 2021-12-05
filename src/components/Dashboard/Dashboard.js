
import useFetch from "../../custom-hooks/useFetch";

const Dashboard = () => {

    const {data: employees} = useFetch("http://localhost:3000/employees");
    const {data: departments} = useFetch("http://localhost:3000/departments");


    // const getDepartmentCount = (obj) => {
    //     const departments = obj.map((value) => {
    //         return value.department;
    //     }).filter((value, index, _arr) => {
    //         return _arr.indexOf(value) === index;
    //     });
    //     return departments.length;
    // }

    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <div className="count-title-wrap">
                    <p className="count-title">

                        {employees && employees.length}
                    </p>

                    <p className="count-subtext">employees</p>
                </div>
            </div>
            <div className="dashboard-content">
                <div className="count-title-wrap">
                    <p className="count-title">{departments && departments.length}</p>
                    <p className="count-subtext">departments</p>
                </div>
            </div>
        </div>

    )

}

export default Dashboard;