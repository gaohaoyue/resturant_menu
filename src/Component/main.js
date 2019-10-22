import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Action';
import Category from './category';
import Detail from './detail';
// import style from '../Style/all.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
        this.props.getList();
    }

    render() {
        const {details,isFetchingCategories, isFetchingDetails} = this.props.data;
        return <div className="roots">
            Menu Categories
            <div className="category" ><Category data={this.props.data} /></div>
            {details.length>0 && <div className="detail"><Detail  data={this.props.data} /></div>}
        </div>
    }
}

const mapStatetoProps = (state) => {
    return {
        data: state.resturantList
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        getList: () => dispatch(actions.getCategoriesLists())
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Main);