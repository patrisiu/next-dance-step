import React from 'react';
import Cloud from '../data/Cloud';
import Source from '../data/Source';
import Levels from './Levels';
import Data from './Data';
import Timer from './Timer';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';


export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeData = this.onChangeData.bind(this);
        this.onChangeLevels = this.onChangeLevels.bind(this);
        this.onChangeTimer = this.onChangeTimer.bind(this);
        this.openSourceDialog = this.openSourceDialog.bind(this);
        this.closeSourceDialog = this.closeSourceDialog.bind(this);
        this.options = [];
        this.range = [];
        this.props.data.map((dance) => {
            this.options.push({
                label: dance.label,
                value: dance.value
            });
            this.range.push({
                minimum: dance.minimum,
                maximum: dance.maximum
            });
        });
        this.state = {
            source: false
        };
    }

    onChangeData = (value) => {
        const dance = this.props.data.find((dance) => { return dance.value === value });
        this.props.onChangeSettings({
            value: value,
            minimum: dance.minimum,
            maximum: dance.maximum,
            timer: this.props.settings.timer
        });
    }

    onChangeLevels = (levels) => {
        this.props.onChangeSettings({
            value: this.props.settings.value,
            minimum: levels.minimum,
            maximum: levels.maximum,
            timer: this.props.settings.timer
        });
    }

    onChangeTimer = (timer) => {
        this.props.onChangeSettings({
            value: this.props.settings.value,
            minimum: this.props.settings.minimum,
            maximum: this.props.settings.maximum,
            timer: timer
        });
    }

    openSourceDialog = () => {
        this.setState({ source: true });
    }

    closeSourceDialog = () => {
        this.setState({ source: false });
    }

    render() {
        const displayElements = [
            {
                element: <Data
                    options={this.options}
                    optionSelected={this.props.settings.value}
                    onChangeData={this.onChangeData}
                />,
                timeout: 300,
                key: "settings-data"
            },
            {
                element: <Levels
                    levels={{
                        minimum: this.props.settings.minimum,
                        maximum: this.props.settings.maximum
                    }}
                    range={this.range[this.props.settings.value]}
                    onChangeLevels={this.onChangeLevels}
                />,
                timeout: 600,
                key: "settings-levels"
            },
            {
                element: <Timer
                    timer={this.props.settings.timer}
                    onChangeTimer={this.onChangeTimer}
                />,
                timeout: 1200,
                key: "settings-timer"
            },
            {
                element: <Button
                    variant="contained">List Steps
                </Button>,
                timeout: 1500,
                key: "settings-button-list"
            }
        ];

        return (
            <Container maxWidth="xs">
                <Grid container direction="column" justify="center" alignItems="stretch" spacing={3}>
                    {
                        displayElements.map((configurableElement) =>
                            <Grow in timeout={configurableElement.timeout} key={configurableElement.key}>
                                <Grid item xs>
                                    {configurableElement.element}
                                </Grid>
                            </Grow>
                        )
                    }
                </Grid>
                <Cloud onClick={this.openSourceDialog} />
                <Source source={this.state.source} onClose={this.closeSourceDialog} />
            </Container>
        );
    }
}
