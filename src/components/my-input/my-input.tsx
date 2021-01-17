import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core'

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.scss',
  shadow: true,
})
export class MyInput {
  private myInput!: HTMLInputElement

  /**
   * Specifies type of input
   */
  @Prop({ reflect: true }) type: 'text' | 'number' = 'text'

  @Prop() name?: string
  @Prop({ attribute: 'required' }) isRequired = false
  @Prop({ mutable: true }) value?: string | number = ''

  @Prop() label?: string

  @State() isActive = false

  @Event() changed: EventEmitter<string | number>

  componentWillLoad() {
    this.isActive = this.value !== ''
  }

  render() {
    return [
      <label
        htmlFor={this.name}
        class={{
          label: true,
          'is-active': this.value !== '',
        }}>
        {this.label}
      </label>,
      <input
        id={this.name}
        class={{ input: true }}
        ref={el => (this.myInput = el)}
        type={this.type}
        name={this.name}
        value={this.value}
        onInput={this.inputHandler}
        onChange={this.changedHandler}
        tabindex={'0'}
        required={this.isRequired}
      />,
      <div class={{ 'box-button': true }}>
        <slot />
      </div>,
    ]
  }

  private inputHandler = () => {
    this.value = this.myInput.value
  }

  private changedHandler = () => {
    this.changed.emit(this.value)
  }
}
