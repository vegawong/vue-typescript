
import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './todo.vue'

@Component({
  mixins: [template]
})
export default class Todo extends Vue {

}
