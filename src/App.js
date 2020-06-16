import React from 'react';
import './App.css';
import Main from './component/Main';
import Loader from './component/data/Loader';
import Container from '@material-ui/core/Container';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  handleLoad = (data) => {
    this.setState({
      data: data
    });
  }

  getMain = () => (<Main data={this.state.data} />);

  getLoader = () => (<Loader onLoad={this.handleLoad} />);

  scrollToBottom = () => {
    window.document.body.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  render() {
    return (
      <Container className="App">
        {this.state.data === null ? this.getLoader() : this.getMain()}
      </Container>
    );
  }
}
