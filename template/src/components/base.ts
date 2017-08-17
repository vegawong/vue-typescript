import Vue from 'vue'
import api from 'util/api'
import store from 'store'

export default class Base extends Vue {
  state = store.state

  readonly api = api
}
