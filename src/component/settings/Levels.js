import React from 'react';
import InputNumber from './InputNumber';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import DirectionsWalkRoundedIcon from '@material-ui/icons/DirectionsWalkRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import Grow from '@material-ui/core/Grow';

export default class Levels extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeMaximum = this.handleChangeMaximum.bind(this);
        this.handleChangeMinimum = this.handleChangeMinimum.bind(this);
        this.state = {
            minimum: this.props.levels.minimum,
            maximum: this.props.levels.maximum
        }
    }

    componentDidUpdate() {
        this.handleChangeMinimum(this.state.minimum);
        this.handleChangeMaximum(this.state.maximum);
    }

    handleChangeMinimum = (value) => {
        let minimum = value;
        let maximum = this.state.maximum;

        if (minimum < this.props.range.minimum || minimum === "") minimum = this.props.range.minimum;
        if (minimum > this.props.range.maximum) minimum = maximum;
        if (minimum > maximum) maximum = minimum;

        this.updateLevels(minimum, maximum);
    }

    handleChangeMaximum = (value) => {
        let minimum = this.state.minimum;
        let maximum = value;

        if (maximum > this.props.range.maximum || maximum === "") maximum = this.props.range.maximum;
        if (maximum < this.props.range.minimum) maximum = minimum;
        if (maximum < minimum) minimum = maximum;

        this.updateLevels(minimum, maximum);
    }

    updateLevels = (minimum, maximum) => {
        if (this.state.minimum !== minimum || this.state.maximum !== maximum) {
            this.setState({
                minimum: minimum,
                maximum: maximum
            });
            this.props.onChangeLevels({
                minimum: minimum,
                maximum: maximum
            });
        }
    }

    render() {
        const inputNumbers = [
            {
                element: <InputNumber
                    startAdornment={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DirectionsWalkRoundedIcon />
                            </InputAdornment>
                        )
                    }}
                    label="Level Minimum"
                    value={this.state.minimum}
                    // value={this.props.levels.minimum}
                    onChange={this.handleChangeMinimum} />,
                timeout: 600,
                key: "settings-levels-minium"
            },
            {
                element: <InputNumber
                    startAdornment={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DirectionsRunRoundedIcon />
                            </InputAdornment>
                        )
                    }}
                    label="Level Maximum"
                    value={this.state.maximum}
                    // value={this.props.levels.maximum}
                    onChange={this.handleChangeMaximum} />,
                timeout: 900,
                key: "settings-levels-maximum"
            }
        ];

        return (
            <Grid container direction="column" spacing={3}>
                {
                    inputNumbers.map((inputNumber) =>
                        <Grow in timeout={inputNumber.timeout} key={inputNumber.key}>
                            <Grid item>
                                {inputNumber.element}
                            </Grid>
                        </Grow>
                    )
                }
            </Grid>
        );
    }
}
