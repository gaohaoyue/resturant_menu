import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { details, shortName, isFetchingCategories, isFetchingDetails, error } = this.props.data;
        if (isFetchingDetails) {
            return <div>loading...</div>
        } else {
            // if (typeof categories !== "undefined") {
            return <div>{`Items in Category: (${shortName})`}
                <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((ele) => {
                        return <tr key={ele.name} >
                            <td>{ele.name}</td><td>{ele.description}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
            // }
        }
    }
}

export default Detail;