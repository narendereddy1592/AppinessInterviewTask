import React, { Component } from 'react';
import './EmployeeListPage.css';

class EmployeeListPage extends Component {
    

    render() {
        const { DashboardData } = this.props;
        return (
            <div className="employeeList-container">
                <table className="employeeList">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DashboardData.user.map((item, ind) => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default EmployeeListPage;