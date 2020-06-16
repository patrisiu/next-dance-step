import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';


export default class Disclaimer extends React.Component {

    handleDefault = () => {
        localStorage.removeItem("googleSheetCode");
        this.handleReload();
    }

    handleReload = () => {
        window.location.reload();
    }

    render() {
        return (
            <Container>
                <Grid container direction="column" justify="center" alignItems="stretch" spacing={1} wrap="nowrap">
                    <Grid item>
                        <Typography variant="overline" color="error">{this.props.message}</Typography>
                    </Grid>
                    <Grid item>
                        <Paper variant="outlined" square>
                            <Typography variant="caption">Please make sure that <Link href="https://support.google.com/a/users/answer/9308870">Publish to the web</Link> option is enabled for the Google Spreadsheet selected.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper variant="outlined" square>
                            <Box><Typography variant="caption">The document should list the Dance Steps arranged in three columns:</Typography></Box>
                            <Box><Typography variant="caption">- First column contains the Level (numeric).</Typography></Box>
                            <Box><Typography variant="caption">- Second column contains the Name.</Typography></Box>
                            <Box><Typography variant="caption">- Third column has a short Description (optional).</Typography></Box>
                            <Box><Typography variant="caption">Check here the <Link href="https://docs.google.com/spreadsheets/d/1baypc9DXbtk85KqFqXR0zdbG0d5wKrn8lMskI50iq6E">Google Spreadsheet example</Link>.</Typography></Box>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper variant="outlined" square>
                            <Box><Typography variant="caption" display="block" noWrap>Current googleSheetCode:</Typography></Box>
                            <Box><Typography variant="caption" display="block" noWrap>{this.props.googleSheetCode}</Typography></Box>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <ButtonGroup fullWidth>
                            <Button onClick={this.handleDefault}>Default</Button>
                            <Button onClick={this.handleReload}>Reload</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}
