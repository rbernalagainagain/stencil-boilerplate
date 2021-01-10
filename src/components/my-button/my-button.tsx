import { Component, Element, h, Host, Prop } from '@stencil/core'
import { Size } from '../../types/size'

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Element() self!: HTMLMyButtonElement

  @Prop({ attribute: 'disabled' }) isDisabled = false

  @Prop() size: Size = 'MEDIUM'

  constructor() {
    this.handleClick = this.handleClick.bind(this)
  }

  get sizeButton(): string {
    if (this.size !== 'MEDIUM') {
      return this.size === 'SMALL' ? 'small' : 'large'
    }

    return 'medium'
  }

  render() {
    this.isDisabledOnClick()

    return (
      <Host onClick={!this.isDisabled && this.handleClick}>
        <button tabIndex={-1} class={{ btn: true }} disabled={this.isDisabled}>
          <div class={{ value: true, [this.sizeButton]: true }}>
            <slot></slot>
          </div>
          <slot name='end'></slot>
        </button>
      </Host>
    )
  }

  private handleClick(e: Event): void {
    e.preventDefault()

    console.warn('Clicked button')
  }

  private isDisabledOnClick() {
    if (this.isDisabled) {
      this.self.onclick = null
    }
  }
}
