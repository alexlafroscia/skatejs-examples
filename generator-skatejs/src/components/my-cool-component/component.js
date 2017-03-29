import style from '../../util/style.js';
import css from './styles.scss';

const { Component, emit, h } = skate;

export default class MyCoolComponent extends Component {
  /**
   * @property {string} is defines the component as my-cool-component
   */
  static get is() {
    return 'my-cool-component';
  }

  renderCallback() {
    const handleClick = () => emit(this, 'event-from-skate');

    return [
      style(this, css),

      <div onClick={handleClick}>
        <p class="text">
          Hello, world! I am my-cool-component!
        </p>

        <slot />
      </div>
    ];
  }
}
