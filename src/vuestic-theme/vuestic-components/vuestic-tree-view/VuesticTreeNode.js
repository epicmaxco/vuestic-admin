export default class VuesticTreeNode {
  constructor (data) {
    /**
     * @type string
     */
    this.icon = data.icon || ''
    /**
     * @type string
     */
    this.label = data.label || ''
    /**
     * @type boolean
     */
    this.selected = data.selected || false
  }
}
