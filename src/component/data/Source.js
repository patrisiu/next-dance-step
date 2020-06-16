import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputSource from './InputSource';


export default class Source extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.validateGoogleSheetUrl = this.validateGoogleSheetUrl.bind(this);
        this.validateGoogleSheetCode = this.validateGoogleSheetCode.bind(this);
        this.handleApply = this.handleApply.bind(this);
        this.googleSheetCode = null;
        this.state = {
            wrongUrl: false
        };
    }

    handleClose = () => {
        this.props.onClose();
    };

    handleApply = () => {
        if (!this.state.wrongUrl && this.googleSheetCode !== null) {
            localStorage.setItem("googleSheetCode", this.googleSheetCode);
            window.location.reload();
        }
    };

    validateGoogleSheetUrl = (url) => {
        const googleSheetUrlPattern = "https://docs.google.com/spreadsheets/d/";
        const checkPattern = url.search(googleSheetUrlPattern);

        if (checkPattern === 0) {
            const extractPattern = url.split("https://docs.google.com/spreadsheets/d/");
            const googleSheetCode = extractPattern[1].split("/");
            this.validateGoogleSheetCode(googleSheetCode[0]);
        } else {
            this.googleSheetCode = null;
            this.setState({ wrongUrl: true });
        }
    };

    validateGoogleSheetCode = (code) => {
        if (code.length > 0) {
            this.googleSheetCode = code;
            this.setState({ wrongUrl: false });
        } else {
            this.googleSheetCode = null;
            this.setState({ wrongUrl: true });
        }
    };

    render() {
        return (
            <Dialog open={this.props.source} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Data Source</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To load another data source, please enter your Google Spreadsheet URL here.
                        The application will restart to load the new values.
                </DialogContentText>
                    <InputSource onChange={this.validateGoogleSheetUrl} error={this.state.wrongUrl} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">Cancel</Button>
                    <Button onClick={this.handleApply} color="primary">Apply</Button>
                </DialogActions>
            </Dialog>
        );
    }
}
