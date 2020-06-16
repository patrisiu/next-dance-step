import React from 'react';
import Name from './Name';
import Level from './Level';
import Description from './Description';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';


export default class Dance extends React.Component {
    constructor(props) {
        super(props);
        this.generateNextStep = this.generateNextStep.bind(this);
        this.setNextDanceStep = this.setNextDanceStep.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.count = this.count.bind(this);
        this.timeResolution = 0.2
        this.dancing = false;
        this.state = {
            count: 0,
            stepName: "Let's Dance!",
            stepDesc: this.props.data.label,
            stepLevel: ""
        }
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    startTimer() {
        this.timerId = setInterval(this.count, this.timeResolution * 1000);
        this.dancing = true;
    }

    stopTimer() {
        clearInterval(this.timerId);
        this.dancing = false;
    }

    pauseTimer() {
        this.dancing ? this.stopTimer() : this.startTimer();
    }

    count() {
        const count = this.state.count + this.timeResolution;
        if (count > this.props.settings.timer) {
            this.setState({ count: this.props.settings.timer });
            this.pauseTimer();
            setTimeout(this.setNextDanceStep, 800);
        } else {
            this.setState({ count: count });
        }
    }

    generateNextStep() {
        const next = Math.floor(Math.random() * 1000) % this.props.data.steps.length;
        const level = this.props.data.steps[next].level;

        if ((level > this.props.settings.maximum) || (level < this.props.settings.minimum)) {
            return this.generateNextStep();
        }
        else {
            return this.props.data.steps[next];
        }
    }

    setNextDanceStep() {
        const nextDanceStep = this.generateNextStep();
        this.setState({
            count: 0,
            stepName: nextDanceStep.name,
            stepDesc: nextDanceStep.description,
            stepLevel: nextDanceStep.level
        });
        this.startTimer();
    }

    render() {
        const transition = this.state.count !== this.props.settings.timer;
        const progress = Math.round(this.state.count / this.props.settings.timer * 100);

        let stepItems = [
            <Name name={this.state.stepName} />
        ];

        if (this.state.stepDesc.length !== 0) {
            stepItems.push(<Description description={this.state.stepDesc} />);
        }

        if (this.state.stepLevel.length !== 0) {
            stepItems.push(<Level level={this.state.stepLevel} />);
        }

        return (
            <Container maxWidth="md" ref={this.props.inputRef}>
                <Zoom in={transition} timeout={800}>
                    <Paper elevation={4} onClick={this.pauseTimer}>
                        <Grid container direction="column" justify="center" alignItems="center" spacing={3} style={{ padding: "16px" }}>
                            {
                                stepItems.map((item) =>
                                    <Grid item>
                                        {item}
                                    </Grid>
                                )
                            }
                        </Grid>
                        <LinearProgress variant="determinate" value={progress} />
                    </Paper>
                </Zoom>
            </Container>
        );
    }
}
