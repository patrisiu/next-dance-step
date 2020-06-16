import React from 'react';
import InputNumber from './InputNumber';
import InputAdornment from '@material-ui/core/InputAdornment';
import TimerRoundedIcon from '@material-ui/icons/TimerRounded';
import Paper from '@material-ui/core/Paper';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.minimumAllowed = this.minimumAllowed.bind(this);
        this.minimumRestore = this.minimumRestore.bind(this);
        this.state = {
            value: this.props.timer,
            error: this.props.timer < 1,
        }
    }

    componentDidUpdate() {
        this.minimumAllowed();
    }

    handleChange = (timer) => {
        this.setState({
            value: timer,
            error: timer < 1,
        })
        this.props.onChangeTimer(timer);
    }

    minimumAllowed = () => {
        if (this.state.value < 1) {
            this.timerId = setTimeout(this.minimumRestore, 800);
        }
    }

    minimumRestore = () => {
        clearTimeout(this.timerId);
        this.handleChange(1);
    }

    render() {
        return (
            <Paper>
                <InputNumber
                    startAdornment={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <TimerRoundedIcon />
                            </InputAdornment>
                        )
                    }}
                    label="Seconds to next Step"
                    value={this.state.value}
                    onChange={this.handleChange}
                    error={this.state.error} />
            </Paper >
        );
    }
}
