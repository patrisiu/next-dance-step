import React from 'react';
import InputSelect from './InputSelect';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';


export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.props.onChangeData(value);
    }

    render() {
        const label = "Dance Steps";
        const inputProps = {
            startAdornment: (
                <InputAdornment position="start">
                    <MusicNoteRoundedIcon />
                </InputAdornment>
            )
        };

        return (
            <Paper>
                <InputSelect
                    inputProps={inputProps}
                    label={label}
                    value={this.props.optionSelected}
                    options={this.props.options}
                    onChange={this.handleChange}
                />
            </Paper>
        );
    }
}
