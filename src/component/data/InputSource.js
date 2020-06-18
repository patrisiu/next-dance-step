import React from 'react';
import TextField from '@material-ui/core/TextField';


export default class InputSource extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <TextField
                autoFocus
                margin="dense"
                id="datasource"
                label="Google Spreadsheet URL"
                type="url"
                fullWidth
                onChange={this.handleChange}
                error={this.props.error}
            />
        )
    }
}
