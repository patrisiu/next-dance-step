import React from 'react';
import './App.css';
import Main from './component/Main';
import Loader from './component/data/Loader';
import Container from '@material-ui/core/Container';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = { data: null };
  }

  handleLoad = (data) => {
    this.setState({ data: data });
  }

  getMain = () => (<Main data={this.state.data} />);

  getLoader = () => (<Loader onLoad={this.handleLoad} />);

  render() {
    return (
      <Container className="App">
        {this.state.data === null ? this.getLoader() : this.getMain()}
      </Container>
    );
  }
}
