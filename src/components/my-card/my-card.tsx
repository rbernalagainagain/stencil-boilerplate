import { Component, Element, h, Host } from '@stencil/core'

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.scss',
  shadow: true,
})
export class MyCard {
  @Element() self: HTMLMyCardElement

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
