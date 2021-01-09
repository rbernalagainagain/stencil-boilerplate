/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal'
import { Size } from './types/size'
import { IconName } from './components/my-icon/types/icon-name'
export namespace Components {
  interface MyButton {
    isDisabled: boolean
    size: Size
  }
  interface MyComponent {
    /**
     * The first name
     */
    first: string
    /**
     * The last name
     */
    last: string
    /**
     * The middle name
     */
    middle: string
  }
  interface MyIcon {
    ariaHidden: string
    color: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
    icon: IconName
    size: Size
  }
}
declare global {
  interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {}
  var HTMLMyButtonElement: {
    prototype: HTMLMyButtonElement
    new (): HTMLMyButtonElement
  }
  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement
    new (): HTMLMyComponentElement
  }
  interface HTMLMyIconElement extends Components.MyIcon, HTMLStencilElement {}
  var HTMLMyIconElement: {
    prototype: HTMLMyIconElement
    new (): HTMLMyIconElement
  }
  interface HTMLElementTagNameMap {
    'my-button': HTMLMyButtonElement
    'my-component': HTMLMyComponentElement
    'my-icon': HTMLMyIconElement
  }
}
declare namespace LocalJSX {
  interface MyButton {
    isDisabled?: boolean
    size?: Size
  }
  interface MyComponent {
    /**
     * The first name
     */
    first?: string
    /**
     * The last name
     */
    last?: string
    /**
     * The middle name
     */
    middle?: string
  }
  interface MyIcon {
    ariaHidden?: string
    color?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
    icon: IconName
    size?: Size
  }
  interface IntrinsicElements {
    'my-button': MyButton
    'my-component': MyComponent
    'my-icon': MyIcon
  }
}
export { LocalJSX as JSX }
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'my-button': LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>
      'my-icon': LocalJSX.MyIcon & JSXBase.HTMLAttributes<HTMLMyIconElement>
    }
  }
}
