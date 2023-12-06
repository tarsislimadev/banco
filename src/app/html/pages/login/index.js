import { Screen } from '../../components/screen.js'

export class Page extends Screen {
  onCreate() {
    super.onCreate()

    this.setText('login')
  }
}
