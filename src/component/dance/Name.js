import React from 'react';
import Typography from '@material-ui/core/Typography';


export default class Name extends React.Component {

    render() {
        return (
            <Typography variant="h2" gutterBottom>{this.props.name}</Typography>
        );
    }
}
