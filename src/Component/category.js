import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Action';
class Category extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, details, isFetchingCategories, isFetchingDetails, error } = this.props.data;
        if (isFetchingCategories) {
            return <div>  loading...  </div>
        } else {
            return <ul>
                {categories.map((ele) => {
                    return <li className='categorList' key={ele.name} onClick={() => { this.handDetails(ele.short_name) }}>
                        {`${ele.name} (${ele.short_name})`}
                    </li>
                })}
            </ul>
        }
        // return <ul>
        //     {categories.map((ele) => {
        //         return <li key={ele.name} onClick={() => { this.handDetails(ele.short_name) }}>
        //             {ele.name}
        //         </li>
        //     })}
        // </ul>
    }

    handDetails = (shortName) => {
        this.props.getDetail(shortName);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (shortName) => { dispatch(actions.getDetail(shortName)) }
    }
}

export default connect(undefined, mapDispatchToProps)(Category);