/**
 * Namespace used to create modular UI components.
 * @namespace UI.Components
 */

class Item {
  constructor(options) {
    const { dataElement, title, disabled, type } = options;
    this.dataElement = dataElement;
    this.title = title;
    this.disabled = disabled;
    this.type = type;
  }
}

export default Item;