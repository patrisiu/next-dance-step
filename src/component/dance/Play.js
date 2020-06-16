import React from 'react';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

export default class Play extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.props.onPlayButton(e.target.value);
    }

    render() {
        return (
            <Fab onClick={this.handleClick} style={{ position: "fixed", right: "16px", bottom: "16px" }}>
                {this.props.play ? <StopIcon /> : <PlayArrowIcon />}
            </Fab >
        );
    }
}
