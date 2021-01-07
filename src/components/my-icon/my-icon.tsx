import { Component, h, Host, Prop } from '@stencil/core'
import { Size } from './types/size'
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

  @Prop({
    attribute: 'name',
  })
  icon!: IconName

  @Prop() size: Size = 'MEDIUM'

  @Prop({
    reflect: true,
  })
  ariaHidden = 'true'

  @Prop() color: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' = 'PRIMARY'

  async componentWillLoad() {
    this.svgContent = await getSVG(`./svg/${Icons[this.icon ?? 'ALERT-CIRCLE-OUTLINE']}`)
  }

  get iconSize(): string {
    if (this.size !== 'MEDIUM') {
      return this.size === 'SMALL' ? 'small' : 'large'
    }

    return 'medium'
  }

  get styleColor(): string {
    if (this.color !== 'PRIMARY') {
      return this.color === 'SECONDARY' ? 'secondary' : 'tertiary'
    }

    return 'primary'
  }

  render() {
    return (
      <Host class={{ [this.iconSize]: true }}>
        <div class={{ 'svg-box': true, [this.styleColor]: true }} innerHTML={this.svgContent} />
      </Host>
    )
  }
}
