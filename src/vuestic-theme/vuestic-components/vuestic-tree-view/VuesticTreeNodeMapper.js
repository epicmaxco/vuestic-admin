import VuesticTreeNode from './VuesticTreeNode'

export default class VuesticTreeNodeMapper {
  static map (data) {
    return new VuesticTreeNode({
      icon: data.icon,
      label: data.label,
      selected: data.selected
    })
  }

  static transform (vuesticTreeNode) {
    return {
      icon: vuesticTreeNode.icon,
      label: vuesticTreeNode.label,
      selected: vuesticTreeNode.selected
    }
  }
}
