import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core'
import { Size } from '../../types/size'
import KEY_CODES from '../../utils/key-utils'
import { toString } from '../../utils/utils'

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Element() self!: HTMLMyButtonElement

  /**
   * Specifies if disabled button. Default is false
   */
  @Prop({ attribute: 'disabled', mutable: true }) isDisabled = false

  /**
   * Specifies type of input
   */
  @Prop({ reflect: true }) type: 'button' | 'submit' | 'reset' = 'button'

  /**
   * Specifies the default size of button
   */
  @Prop() size: Size = 'MEDIUM'

  /**
   * Set the role, respectively `button`
   */
  @Prop({ reflect: true }) role = 'button'

  /**
   * Set border button, default 'true'
   */
  @Prop() border = true

  /**
   * Emit event onClicked when has click or press ENTER or SPACE
   */
  @Event({ composed: true }) clicked: EventEmitter<boolean>

  constructor() {
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  get sizeButton(): string {
    if (this.size.toUpperCase() !== 'MEDIUM') {
      return this.size === 'SMALL' ? 'small' : 'large'
    }

    return 'medium'
  }

  render() {
    this.isDisabledEvents()

    return (
      <Host
        form={'form'}
        class={{ [this.sizeButton]: true, 'has-border': this.border }}
        aria-disabled={toString(this.isDisabled)}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        tabIndex={0}>
        <button
          type={this.type}
          class={{ btn: true }}
          disabled={this.isDisabled}
          tabIndex={-1}>
          <div class={{ value: true }}>
            <slot />
          </div>
          <slot name='end'></slot>
        </button>
      </Host>
    )
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.code === KEY_CODES.SPACE || e.code === KEY_CODES.RETURN) {
      e.preventDefault()
      this.clicked.emit(true)
    }
  }

  private handleClick(e: Event) {
    console.log('entra')
    e.preventDefault()
    this.self.blur()
    this.clicked.emit(true)
  }

  private isDisabledEvents() {
    if (this.isDisabled) {
      this.self.onclick = null
      this.self.onkeydown = null
    }
  }
}
