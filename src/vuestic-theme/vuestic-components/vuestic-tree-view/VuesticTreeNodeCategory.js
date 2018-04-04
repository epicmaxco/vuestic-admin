export default class VuesticTreeNodeCategory {
  constructor (data) {
    /**
     * @type string
     */
    this.icon = data.icon || ''
    /**
     * @type any
     */
    this.label = data.label || null

    /**
     * @type VuesticTreeNode[] | VuesticTreeNodeCategory[]
     */
    this.children = data.children || []

    /**
     * @type boolean
     */
    this.isOpen = data.isOpen || false
  }

  /**
   * @return void
   */
  expand () {
    this.isOpen = true
    this.children.forEach(node => {
      if (node instanceof VuesticTreeNodeCategory) {
        node.expand()
      }
    })
  }

  /**
   * @return void
   */
  collapse () {
    this.isOpen = false
    this.children.forEach(node => {
      if (node instanceof VuesticTreeNodeCategory) {
        node.expand()
      }
    })
  }
}
