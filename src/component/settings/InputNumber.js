import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';


export default class InputNumber extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.inputRef = React.createRef();
    }

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    handleIncrease = () => {
        this.inputRef.current.focus();
        this.props.onChange(this.props.value + 1);
    }

    handleDecrease = () => {
        this.inputRef.current.focus();
        this.props.onChange(this.props.value - 1);
    }

    render() {
        const inputProps = {
            readOnly: true
        };

        const InputProps = {
            startAdornment: this.props.startAdornment.startAdornment,
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton color="default" aria-label="decrease" onClick={this.handleDecrease}>
                        <ExpandMoreRoundedIcon />
                    </IconButton>
                    <IconButton color="default" aria-label="increase" onClick={this.handleIncrease}>
                        <ExpandLessRoundedIcon />
                    </IconButton>
                </InputAdornment>
            )
        };

        return (
            <Paper>
                <TextField
                    label={this.props.label}
                    value={this.props.value}
                    type="number"
                    InputProps={InputProps}
                    inputProps={inputProps}
                    onChange={this.handleChange}
                    variant="outlined"
                    error={this.props.error}
                    inputRef={this.inputRef}
                />
            </Paper>
        )
    }
}
