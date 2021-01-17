import { newSpecPage } from '@stencil/core/testing'
import { FormPage } from '../form-page'

describe('form-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormPage],
      html: `<form-page></form-page>`,
    })
    expect(page.root).toEqualHtml(`
      <form-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-page>
    `)
  })
})
