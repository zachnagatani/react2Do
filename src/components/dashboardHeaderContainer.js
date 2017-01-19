import DashboardHeader from './dashboardHeader';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        username: state.username
    }
};

export const DashboardHeaderContainer = connect(
    mapStateToProps
)(DashboardHeader);