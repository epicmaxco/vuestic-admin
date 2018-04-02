import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'

export default class VuesticTreeRoot {
  constructor (nodes) {
    /**
     * @type VuesticTreeNode | VuesticTreeNodeCategory
     */
    this.nodes = nodes
  }

  /**
   * @return void
   */
  collapse () {
    this.nodes.forEach(node => {
      if (node instanceof VuesticTreeNodeCategory) {
        node.collapse()
      }
    })
  }

  /**
   * @return void
   */
  expand () {
    this.nodes.forEach(node => {
      if (node instanceof VuesticTreeNodeCategory) {
        node.expand()
      }
    })
  }
}
