import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import Collapse from '../components/Collapse';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.setIndex = this.setIndex.bind(this);
  }
  setIndex(index) {
    if (this.state.index !== index) {
      this.setState({ index });
    } else {
      this.setState({ index: null });
    }
  }
  render() {
    return (
      <main>
        <section>
          {this.props.elements.map((element, index) => (
            <div key={`element-collapse-element-${element.name}`}>
              <button
                onClick={() => this.setIndex(index)}
                style={{ width: '100%' }}
                type="button"
              >
                {element.name}
              </button>
              <Collapse
                isOpen={this.state.index === index}
                onRest={() => action('onRest')}
                {...this.props.props}
              >
                <div style={{ background: 'lightpink', padding: '20px' }}>
                  {element.text}
                </div>
              </Collapse>
            </div>
          ))}
        </section>
        <h3>Other content...</h3>
      </main>
    );
  }
}

App.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  props: PropTypes.shape({
    className: PropTypes.string,
    transition: PropTypes.string,
  }).isRequired,
};

export default App;
