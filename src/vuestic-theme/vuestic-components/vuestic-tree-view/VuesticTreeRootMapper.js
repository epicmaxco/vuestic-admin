import VuesticTreeRoot from './VuesticTreeRoot'
import VuesticTreeNodeCategoryMapper from './VuesticTreeNodeCategoryMapper'
import VuesticTreeNode from './VuesticTreeNode'
import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
import VuesticTreeNodeMapper from './VuesticTreeNodeMapper'

export default class VuesticTreeRootMapper {

  static map (data = []) {
    const nodes = data.map(nodeData => {
      const isCategory = !!nodeData.children
      if (isCategory) {
        return VuesticTreeNodeCategoryMapper.map(nodeData)
      }
      return VuesticTreeNodeMapper.map(nodeData)
    })

    return new VuesticTreeRoot(nodes)
  }

  static transform (vuesticTreeRoot) {
    return vuesticTreeRoot.nodes.map(node => {
      if (node instanceof VuesticTreeNodeCategory) {
        return VuesticTreeNodeCategoryMapper.transform(node)
      }
      return VuesticTreeNodeMapper.transform(node)
    })
  }

}
