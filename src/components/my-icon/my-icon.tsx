import { Component, getAssetPath, h, Prop } from '@stencil/core'
import { Size } from './types/size'
import { Icons } from './types/icons'
import { IconName } from './types/iconName'

@Component({
  tag: 'my-icon',
  styleUrl: 'my-icon.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MyIcon {
  @Prop({
    attribute: 'name',
  })
  icon!: IconName

  @Prop() size: Size = 'MEDIUM'

  get setIconSize(): string {
    if (this.size !== 'MEDIUM') {
      return this.size === 'SMALL' ? 'small' : 'large'
    }

    return 'medium'
  }

  get name(): string {
    return Icons[this.icon]
  }

  render() {
    return <img class={this.setIconSize} src={getAssetPath(`./assets/${this.name}`)} />
  }
}
