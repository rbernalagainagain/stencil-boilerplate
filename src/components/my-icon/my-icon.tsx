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

  async componentWillLoad() {
    this.svgContent = await getSVG(`./svg/${Icons[this.icon]}`)
  }

  get setIconSize(): string {
    if (this.size !== 'MEDIUM') {
      return this.size === 'SMALL' ? 'small' : 'large'
    }

    return 'medium'
  }

  render() {
    return (
      <Host class={{ [this.setIconSize]: true }}>
        <div innerHTML={this.svgContent} />
      </Host>
    )
  }
}
