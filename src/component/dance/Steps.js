import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


export default class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });
    }

    handleClose = () => { this.props.onClose(); }

    render() {
        let stepIndex = 0;
        return (
            <Dialog fullScreen open={this.props.open} onClose={this.handleClose} TransitionComponent={this.transition}>
                <AppBar color="default" style={{ position: "sticky" }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6">{this.props.data.label}</Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    {this.props.data.steps.map((step) =>
                        <ListItem button divider key={"step" + stepIndex++}>
                            <ListItemText primary={step.name} secondary={step.description} />
                            <ListItemSecondaryAction>
                                <Typography variant="caption">{step.level}</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
                </List>
            </Dialog>
        );
    }
}
