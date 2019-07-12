import React, {Component} from 'react';
import {connect} from  'react-redux'
import EmployeeListPage from '../EmployeeListpage/EmployeeListPage';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            DashboardData:null
        }
    }   
    componentWillMount = () => {
        this.setState({DashboardData:this.props.DashboardData})
    }

    render() {
        return (
            <div className="Dashboard">
                <EmployeeListPage
                    DashboardData={this.state.DashboardData}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    DashboardData: state.DashBboraddata
    }

}

export default connect(mapStateToProps) (Dashboard);