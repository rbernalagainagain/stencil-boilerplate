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
   * Specifies the default size of the icon
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

  /**
   * Specifies which color default.
   */
  @Prop() color: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' = 'PRIMARY'

  async componentWillLoad(): Promise<void> {
    this.svgContent = await getSVG(`./svg/${Icons[this.icon]}`)
  }

  get iconSize(): string {
    if (this.size !== 'MEDIUM') {
      return this.size === 'SMALL' ? 'small' : 'large'
    }

    return 'medium'
  }

  render() {
    return (
      <Host>
        {this.icon ? (
          <div class={{ box: true, [this.iconSize]: true }} innerHTML={this.svgContent} />
        ) : (
          <div class={{ box: true }} />
        )}
      </Host>
    )
  }
}
