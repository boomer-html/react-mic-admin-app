import { useLocation, Link } from "react-router-dom";

const Sidenavbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div className="sidenav">
            <div className="sidenav-wrap">
                <div className="sidenav-list">
                    <Link className={splitLocation[1] === "" ? "sidenav-menu active" : "sidenav-menu"} to="/">Dashboard</Link>
                    <Link to="/managedepartments" className={splitLocation[1] === "managedepartments" ? "sidenav-menu active" : "sidenav-menu"}>Manage Departments</Link>
                    <Link to="/manageemployees" className={splitLocation[1] === "manageemployees" ? "sidenav-menu active" : "sidenav-menu"}>Manage Employees</Link>
                    <Link to="/adddepartment" className={splitLocation[1] === "adddepartment" ? "sidenav-menu active" : "sidenav-menu"}>Add Department</Link>
                    <Link to="/addemployee" className={splitLocation[1] === "addemployee" ? "sidenav-menu active" : "sidenav-menu"}>Add Employee</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar;