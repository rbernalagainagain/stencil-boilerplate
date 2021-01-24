import {
  Component,
  ComponentInterface,
  h,
  Host,
  Listen,
  Prop,
  State,
  Element,
  Event,
  EventEmitter,
  Method,
} from '@stencil/core'

@Component({
  tag: 'my-input-password',
  styleUrl: 'my-input-password.scss',
  shadow: true,
})
export class MyInputPassword implements ComponentInterface {
  @Element() el: HTMLMyInputPasswordElement

  @Prop() placeholder?: string

  @Prop({
    attribute: 'visible',
  })
  isPasswordVisible: boolean = false

  @State()
  type: 'text' | 'password' = 'password'

  @Event() showPassword: EventEmitter<boolean>

  @Method()
  async getValue() {
    return this.isPasswordVisible
  }

  @Listen('focus')
  test() {
    const firsInput = this.el.shadowRoot.querySelectorAll('input')[0]
    firsInput.focus()
  }

  componentWillLoad(): void {
    if (this.isPasswordVisible) {
      this.type = 'text'
    }
  }

  componentDidLoad(): void {
    if (this.isPasswordVisible) {
      this.showPassword.emit(true)
    }
  }

  render() {
    return (
      <Host>
        <div class={'wrapper-button'}>
          <input type={this.type} placeholder={this.placeholder} />
          <button onClick={this.handleClick.bind(this)}>
            {this.type === 'password' ? (
              <my-icon key='1' icon='EYE-OFF-OUTLINE'></my-icon>
            ) : (
              <my-icon key='2' icon='EYE-OUTLINE'></my-icon>
            )}
          </button>
        </div>
      </Host>
    )
  }

  private handleClick(ev: Event) {
    ev.preventDefault()
    if (this.type === 'password') {
      this.type = 'text'
      this.showPassword.emit(true)
      return
    }

    this.type = 'password'
    this.showPassword.emit(false)
    return
  }
}
