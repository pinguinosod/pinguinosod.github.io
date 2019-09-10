'use strict';

const e = React.createElement;
const { interval } = rxjs;
const { take } = rxjs.operators;

class Moly extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aaaarray: [] }; 
  }

  componentDidMount() {
    const bodyWidth = document.querySelector("body").offsetWidth;
    interval(60)
    .pipe(take(Math.floor(bodyWidth/10)))
    .subscribe(key => {
      const aaaarray = this.state.aaaarray;
      aaaarray.push(aaaa(key));
      this.setState({aaaarray});
    })
  }

  render() {
    return e(
      'div',
      null,
      this.state.aaaarray
    );
  }
}

const aaaa = key => {
  return e('span', {key}, 'a');
}

const domContainer = document.querySelector('#moly');
ReactDOM.render(e(Moly), domContainer);
