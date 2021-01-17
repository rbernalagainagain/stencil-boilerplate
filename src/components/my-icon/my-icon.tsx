import { Component, h, Host, Prop } from '@stencil/core'
import { Size } from '../../types/size'
import { Icons } from './types/icons'
import { IconName } from './types/icon-name'
import { getSVG } from '../../utils/utils'

@Component({
  tag: 'my-icon',
  styleUrl: 'my-icon.scss',
  assetsDirs: ['svg'],
  shadow: true,
})
export class MyIcon {
  private svgContent!: string

  /**
   * The name specifies which icon to use from the list
   */
  @Prop({
    attribute: 'name',
  })
  icon!: IconName

  /**
   * Specifies the default size `SMALL | MEDIUM | LARGE` of the icon. MEDIUM is default
   */
  @Prop() size: Size = 'SMALL'

  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  @Prop({ reflect: true }) ariaLabel?: string

  /**
   * Set the icon to hidden, respectively `true`, to remove it from the accessibility tree.
   */
  @Prop({
    reflect: true,
  })
  ariaHidden = 'true'

  async componentWillLoad(): Promise<void> {
    this.svgContent = await getSVG(`./svg/${Icons[this.icon]}`)
  }

  get iconSize(): string {
    if (this.size.toUpperCase() !== 'SMALL') {
      return this.size === 'MEDIUM' ? 'medium' : 'large'
    }

    return 'small'
  }

  render() {
    return (
      <Host>
        {this.icon !== undefined ? (
          <div
            class={{ box: true, [this.iconSize]: this.size !== undefined }}
            innerHTML={this.svgContent}
          />
        ) : (
          <div class={{ box: true }} />
        )}
      </Host>
    )
  }
}
