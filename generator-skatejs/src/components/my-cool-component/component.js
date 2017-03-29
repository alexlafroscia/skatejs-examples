import style from '../../util/style.js';
import css from './styles.scss';

const { Component, h } = skate;

export default class MyCoolComponent extends Component {
  /**
   * @property {string} is defines the component as my-cool-component
   */
  static get is() {
    return 'my-cool-component';
  }

  renderCallback() {
    return [
      style(this, css),
      <p class="text">
        Hello, world! I am my-cool-component!
      </p>
    ];
  }
}
