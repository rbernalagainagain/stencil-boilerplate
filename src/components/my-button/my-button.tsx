import { Component, Element, h, Host, Prop } from '@stencil/core'
import { Size } from '../../types/size'

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Element() el!: HTMLMyButtonElement

  @Prop({ attribute: 'disabled' }) isDisabled = false

  @Prop() size: Size = 'MEDIUM'

  get sizeButton(): string {
    if (this.size !== 'MEDIUM') {
      return this.size === 'SMALL' ? 'small' : 'large'
    }

    return 'medium'
  }

  render() {
    return (
      <Host tabIndex={0} disabled={this.isDisabled} role='button'>
        <button tabIndex={-1} class={{ btn: true }} disabled={this.isDisabled}>
          <div class={{ value: true, [this.sizeButton]: true }}>
            <slot></slot>
          </div>
          <slot name='end'></slot>
        </button>
      </Host>
    )
  }
}
