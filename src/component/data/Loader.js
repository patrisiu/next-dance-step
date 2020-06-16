import React from 'react';
import './Loader.css';
import Disclaimer from './Disclaimer';
import logo from './wcs.png';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.googleSheetCode = this.getGoogleSheetCode();
        this.googleSheetPage = 1;
        this.state = {
            dances: [],
            error: {
                hasError: false,
                message: ""
            }
        };
    }

    componentDidMount() {
        this.loadGoogleSheet(this.googleSheetCode, this.googleSheetPage);
    }

    googleSheetUrl = (googleSheetCode, googleSheetPage) => {
        return "https://spreadsheets.google.com/feeds/cells/" + googleSheetCode + "/" + googleSheetPage + "/public/full?alt=json";
    }

    status = (response) => {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            console.log(response.statusText);
            return Promise.reject(new Error(response.statusText));
        }
    }

    json = (response) => {
        return response.json();
    }

    loadGoogleSheet = (googleSheetCode, googleSheetPage) => {
        fetch(this.googleSheetUrl(googleSheetCode, googleSheetPage), { mode: 'cors' })
            .then(this.status)
            .then(this.json)
            .then(this.parse)
            .catch(this.error);
    }

    error = (error) => {
        if (this.state.dances.length === 0) {
            this.setState({
                error: {
                    hasError: true,
                    message: error.toString()
                }
            });
            console.log('Request failed', error);
        }
        else {
            this.props.onLoad(this.state.dances);
        }
    }

    parse = (data) => {
        console.log('Request succeeded with JSON response', data);

        const cells = this.parseSheetCells(data);
        const dance = this.parseDanceSteps(cells);

        const dances = this.state.dances;
        dances.push({
            label: this.parseDanceLabel(data),
            value: this.googleSheetPage - 1,
            minimum: dance.minimum,
            maximum: dance.maximum,
            steps: dance.steps
        });

        this.setState({
            dances: dances
        });

        this.googleSheetPage = this.googleSheetPage + 1;
        this.loadGoogleSheet(this.googleSheetCode, this.googleSheetPage);
    }

    getGoogleSheetCode = () => {
        let spreadsheetCode = localStorage.getItem("googleSheetCode");
        spreadsheetCode = spreadsheetCode === null ? "1baypc9DXbtk85KqFqXR0zdbG0d5wKrn8lMskI50iq6E" : spreadsheetCode;
        return spreadsheetCode;
    }

    parseDanceLabel = (data) => {
        return data.feed.title.$t;
    }

    parseSheetCells = (data) => {
        const entries = data.feed.entry;
        let cells = [];
        entries.map((entry) =>
            cells.push({
                row: entry.gs$cell.row,
                col: entry.gs$cell.col,
                inputValue: entry.gs$cell.$t
            }));
        return cells;
    }

    parseDanceSteps = (cells) => {
        let steps = [];
        let minimum = 99;
        let maximum = 0;
        let currentRow = "1";
        let step = {
            level: "",
            name: "",
            description: ""
        }

        cells.map((cell) => {
            if (currentRow !== cell.row) {
                steps.push(step);
                step = {
                    level: "",
                    name: "",
                    description: ""
                }
                currentRow = cell.row;
            }

            switch (cell.col) {
                case "1":
                    step.level = cell.inputValue;
                    minimum = minimum > step.level ? parseInt(step.level) : minimum;
                    maximum = maximum < step.level ? parseInt(step.level) : maximum;
                    break;
                case "2":
                    step.name = cell.inputValue;
                    break;
                case "3":
                    step.description = cell.inputValue;
                    break;
                default:
                    break;
            }
        });
        steps.push(step);

        return {
            minimum: minimum,
            maximum: maximum,
            steps: steps
        };
    }

    promptLoading = () => {
        return (
            <Container>
                <Typography variant="overline" gutterBottom>Loading...</Typography>
                {this.state.dances.map((dance) =>
                    <Box key={dance.value}><Typography variant="caption" gutterBottom>{dance.label}</Typography></Box>
                )}
            </Container>
        );
    };

    promptDisclaimer = () => (
        <Disclaimer message={this.state.error.message} googleSheetCode={this.googleSheetCode} />
    );

    getReadme = () => (
        <Container className="component-loader-center">
            <Typography className="component-loader-readme" variant="caption">
                <Link href="https://github.com/patrisiu/next-dance-step/">GitHub Source</Link>
            </Typography>
        </Container>
    );

    render() {
        return (
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                    alignContent="stretch"
                    spacing={2}
                    className="component-loader-container" >
                    <Grid item className="component-loader-center">
                        <Paper elevation={6}>
                            <img src={logo} className="component-loader-logo" alt="logo" />
                            <Typography className="component-loader-title" variant="h4">Next Dance Step</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        {this.state.error.hasError ? this.promptDisclaimer() : this.promptLoading()}
                    </Grid>
                </Grid>
                {this.getReadme()}
            </Container>
        );
    }
}
