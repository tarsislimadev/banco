import { HTML } from '@brtmvdl/frontend'

import * as COLORS from '../utils/colors.js'

export class Screen extends HTML {
  onCreate() {
    this.setStyles()
  }

  setStyles() {
    this.setStyle('background-color', COLORS.BLACK_2)

    this.setStyle('color', COLORS.WHITE_1)
  }
}
