export default class VuesticTreeNodeCategory {
  constructor (data) {
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

    if (!this.children.length) {
      throw new Error('VuesticTreeNodeCategory should have at least one child')
    }
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
