import React from 'react'
import Typography from '@material-ui/core/Typography';


export default class Description extends React.Component {

    render() {
        return (
            <Typography variant="inherit" gutterBottom>{this.props.description}</Typography>
        );
    }
}
