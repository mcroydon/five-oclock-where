import React, { Component } from "react";
import { DateTime } from "luxon";

class When extends Component {
    state = {
        name: this.props.name
    };

    render() {
        return DateTime.now().setZone(this.state.name).toLocaleString(DateTime.DATETIME_FULL);
    }
}

export default When;