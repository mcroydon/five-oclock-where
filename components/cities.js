import React, { Component } from "react";

class Cities extends Component {
    state = {
        cities: this.props.cities
    };

    render() {
        const lf = new Intl.ListFormat('en');
        return lf.format(this.state.cities);
    }
}

export default Cities;