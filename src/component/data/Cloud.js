import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';

export default class Cloud extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.onClick();
    }

    render() {
        return (
            <Fab onClick={this.handleClick} style={{ position: "fixed", left: "16px", bottom: "16px" }}>
                <CloudDownloadRoundedIcon />
            </Fab >
        );
    }
}
