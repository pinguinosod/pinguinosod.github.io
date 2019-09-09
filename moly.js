'use strict';

const e = React.createElement;

class Moly extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aaaas: 1 };
  }

  componentDidMount() {
    const ticker = setInterval(() => {
      if (this.state.aaaas < 360) this.setState({ aaaas: this.state.aaaas + 1 })
    }, 16)
  }

  getAaaarray(aaaas) {
    let aaaarray = []
    for (let i = 0; i < aaaas; i++) {
      aaaarray.push(aaaa(i))
    }
    return aaaarray;
  }

  render() {
    const aaaarray = this.getAaaarray(this.state.aaaas);
    return e(
      'div',
      {
        style: {
          transform: 'scale(' + (2 - ((aaaarray.length / 360) * 2)) + ')'
        }
      },
      aaaarray
    );
  }
}

const aaaa = key => {
  const generateAaaaProps = (key) => {
    return {
      key,
      style: {
        fontSize: (Math.floor(Math.random() * 16 + 10)) + 'px',
        transform: 'rotate(' + (Math.floor(Math.random() * 360)) + 'deg)'
      }
    }
  }
  return e('span', generateAaaaProps(key), 'a');
}

const domContainer = document.querySelector('#moly');
ReactDOM.render(e(Moly), domContainer);
