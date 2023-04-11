import { Component } from 'react';

import styles from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <section className={styles.buttonWrapper}>
        <button onClick={()=> this.props.onClick('LOAD_MORE')} className={styles.button}> Load more </button>
      </section>
    );
  }
}
