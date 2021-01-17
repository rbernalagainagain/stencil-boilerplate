import { Component, Host, h, Prop, Element } from '@stencil/core'
import KEY_CODES from '../../utils/key-utils'

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss',
  shadow: true,
})
export class MyModal {
  private modal!: HTMLElement

  @Element() self!: HTMLMyModalElement

  /**
   * Specifies visibility modal. 'in' is visible, 'out' is hidden.
   */
  @Prop({ mutable: true, reflect: true }) show: 'in' | 'out' = 'out'

  constructor() {
    this.closeModal = this.closeModal.bind(this)
    this.handleEscape = this.handleEscape.bind(this)
  }

  componentWillUpdate(): void {
    setTimeout(() => this.modal.focus(), 0)
  }

  componentDidLoad(): void {
    setTimeout(() => this.modal.focus(), 0)
  }

  render() {
    return (
      <Host
        onClick={this.closeModal}
        style={{ visibility: this.show === 'in' ? 'visible' : 'hidden' }}>
        <div
          ref={el => (this.modal = el)}
          class={{ wrapper: true }}
          onKeyDown={this.handleEscape}
          tabindex={'0'}>
          <slot />
        </div>
      </Host>
    )
  }

  private handleEscape(e: KeyboardEvent) {
    if (e.code === KEY_CODES.ESC) {
      e.preventDefault()
      this.show = 'out'
    }
  }

  private closeModal(e: Event) {
    e.preventDefault()
    if (e.target === this.self) {
      this.show = 'out'
    }
  }
}
