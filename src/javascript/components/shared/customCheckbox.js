import React from 'react';

export default class CustomCheckbox extends React.Component {
    constructor () {
        super();
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this)
    }

    handleCheckBoxChange (status, event)  {
        let isChecked = event.target.checked;
        if(isChecked) {
            this.props.filterList(status, isChecked);
        } else {
            this.props.resetList(status, isChecked);
        }
    }

    render () {
        return (
            <div className="customCheckbox">
                <input
                    type="checkbox"
                    name="person"
                    onChange={this.handleCheckBoxChange.bind(this, this.props.status)}
                />
                <label htmlFor='person'>{this.props.status}</label>
            </div>
        );
    }
}
