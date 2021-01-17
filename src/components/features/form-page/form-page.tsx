import { Component, h, Host, State } from '@stencil/core'

@Component({
  tag: 'form-page',
  styleUrl: 'form-page.scss',
  shadow: true,
})
export class FormPage {
  // @Element() private self!: HTMLFormPageElement

  myForm: HTMLFormElement

  @State() form: {
    name: string | number
    surname: string | number
    address: string | number
  } = {
    name: '',
    surname: '',
    address: '',
  }

  render() {
    return (
      <Host>
        <form
          action={'#'}
          ref={el => (this.myForm = el)}
          onSubmit={ev => {
            ev.preventDefault()
            console.log(ev)
          }}>
          {/*<input type={'text'} />*/}
          {/*<input type={'text'} />*/}
          {/*<my-input*/}
          {/*  onChanged={ev => this.changeValue('name', ev.detail)}*/}
          {/*  label='Name'*/}
          {/*  isRequired={false}></my-input>*/}
          {/*<my-input*/}
          {/*  label='Surname'*/}
          {/*  onChanged={ev => this.changeValue('surname', ev.detail)}></my-input>*/}
          {/*<my-input*/}
          {/*  label='Address'*/}
          {/*  // onChanged={ev => this.changeValue('address', ev.detail)}*/}
          {/*></my-input>*/}

          <hr />
          {/*<button type={'submit'}>{'Send'}</button>*/}
          <my-button type={'submit'}>
            {'SEND'}
            <my-icon slot='end' icon='ARROW-FORWARD-OUTLINE'></my-icon>
          </my-button>
        </form>
      </Host>
    )
  }

  // private changeValue = (field: string, value: string | number) => {
  //   console.log(field, value)
  //   this.form = {
  //     ...this.form,
  //     [field]: value,
  //   }
  // }
}
