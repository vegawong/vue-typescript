declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void
}

declare module '*.vue' {
  import * as Vue from 'vue'
  let value: Vue.ComponentOptions<Vue>
  export = value
}
