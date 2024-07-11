import { Component } from 'react';
import styles from './ErrorTestButton.module.css';

class ErrorTestButton extends Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    throw new Error('This is a test error');
  }

  render() {
    return (
      <button className={styles.button} onClick={this.handleError}>
        Throw Error
      </button>
    );
  }
}

export default ErrorTestButton;
