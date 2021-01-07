import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
