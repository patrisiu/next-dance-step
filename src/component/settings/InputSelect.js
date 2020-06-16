import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


export default class InputSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <Paper>
                <TextField
                    label={this.props.label}
                    value={this.props.value}
                    select
                    InputProps={this.props.inputProps}
                    onChange={this.handleChange}
                    helperText={this.props.helperText}
                    variant="outlined"
                    fullWidth
                >
                    {this.props.options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Paper >
        )
    }
}
