'use strict';

const e = React.createElement;
const { interval } = rxjs;
const { take } = rxjs.operators;

class Moly extends React.Component {
  constructor(props) {
    super(props);
    this.state = { particles: [] };
  }

  componentDidMount() {
    const bodyWidth = document.querySelector("body").offsetWidth;
    const intervalValue = bodyWidth > 700 ? 45 : 80;
    interval(intervalValue)
      .pipe(take(Math.floor(bodyWidth / 10)))
      .subscribe(key => {
        this.setState({ particles: [...this.state.particles, particle(key)] })
      })
  }

  render() {
    return e(
      'div',
      null,
      this.state.particles
    );
  }
}

const particle = key => {
  return e('span', { key }, '@');
}

const domContainer = document.querySelector('#moly');
ReactDOM.render(e(Moly), domContainer);
