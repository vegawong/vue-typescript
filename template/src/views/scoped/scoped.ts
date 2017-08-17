
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './scoped.vue'

@Component({
  mixins: [template]
})
export default class Scoped extends Vue {

}
