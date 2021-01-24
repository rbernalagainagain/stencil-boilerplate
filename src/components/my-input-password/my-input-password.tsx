import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core'

@Component({
  tag: 'my-input-password',
  styleUrl: 'my-input-password.scss',
  shadow: true,
})
export class MyInputPassword implements ComponentInterface {
  @Element() el: HTMLMyInputPasswordElement

  @Prop() value?: string

  @Prop() placeholder?: string

  @Prop({
    attribute: 'visible',
  })
  isPasswordVisible: boolean = false

  @State()
  type: 'text' | 'password' = 'password'

  private inputPassword: HTMLInputElement

  @Event() showPassword: EventEmitter<boolean>

  @Method()
  async getValue() {
    return this.isPasswordVisible
  }

  @Listen('focus')
  handleFocus(ev: Event) {
    ev.preventDefault()
    console.log(ev.composedPath()[0])
  }

  @Watch('value')
  evaluatePasswordSecurity() {
    const passwordCharts = Array.from(this.value)

    if (passwordCharts.includes('#') && passwordCharts.some(x => !isNaN(+x))) {
      console.log('your password is very strong')
      return
    }

    if (passwordCharts.includes('#') || passwordCharts.some(x => !isNaN(+x))) {
      console.log('your password is strong')
    }
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
    this.setFocusOnInput()
  }

  render() {
    return (
      <Host>
        <div class={'wrapper-button'}>
          <input
            ref={el => (this.inputPassword = el as HTMLInputElement)}
            onInput={() => (this.value = this.inputPassword.value)}
            type={this.type}
            placeholder={this.placeholder}
          />
          <button type='button' onClick={this.handleClick.bind(this)}>
            {this.type === 'password' ? (
              <my-icon key='EYE-OFF-OUTLINE' icon='EYE-OFF-OUTLINE'></my-icon>
            ) : (
              <my-icon key='EYE-OUTLINE' icon='EYE-OUTLINE'></my-icon>
            )}
          </button>
        </div>
        <slot />
      </Host>
    )
  }

  private setFocusOnInput() {
    const firsInput = this.el.shadowRoot.querySelectorAll('input')[0]
    firsInput.focus()
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
