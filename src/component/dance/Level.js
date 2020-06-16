import React from 'react';
import Typography from '@material-ui/core/Typography';


export default class Level extends React.Component {
    
    render() {
        return (
            <Typography variant="caption" gutterBottom>{this.props.level}</Typography>
        );
    }
}
