import React from 'react';
import './Main.css';
import Settings from './settings/Settings';
import Dance from './dance/Dance';
import Play from './dance/Play';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlayButton = this.handlePlayButton.bind(this);
        this.handleSettings = this.handleSettings.bind(this);
        this.inputRef = React.createRef();
        this.state = {
            isRunning: false,
            settings: {
                value: this.props.data[0].value,
                minimum: this.props.data[0].minimum,
                maximum: this.props.data[0].maximum,
                timer: 10
            }
        }
    }

    componentDidUpdate() {
        this.fullScreenMode();
    }

    handlePlayButton = () => {
        const isRunning = !this.state.isRunning;
        this.setState({ isRunning: isRunning });
        this.fullScreenMode(isRunning);
    };

    handleSettings = (settings) => {
        this.setState({
            settings: settings
        });
    };

    fullScreenMode = () => {
        if (!window.document.fullscreenElement && this.state.isRunning) {
            console.log(this.inputRef.current);
            this.inputRef.current.requestFullscreen();
        }
        else if (window.document.fullscreenElement && !this.state.isRunning) {
            window.document.exitFullscreen();
        }
    }

    getDance = () => (<Dance
        settings={this.state.settings}
        dance={this.state.isRunning}
        data={{
            label: this.props.data[this.state.settings.value].label,
            steps: this.props.data[this.state.settings.value].steps
        }} />);

    getSettings = () => (<Settings
        settings={this.state.settings}
        data={this.props.data}
        onChangeSettings={this.handleSettings} />);

    render() {
        return (
            <Container ref={this.inputRef} className="component-main-container">
                <Grid container direction="column" justify="center" alignItems="center" className="component-main-grid" >
                    <Grid item>
                        {this.state.isRunning ? this.getDance() : this.getSettings()}
                    </Grid>
                </Grid>
                <Play play={this.state.isRunning} onPlayButton={this.handlePlayButton} />
            </Container >
        );
    }
}
