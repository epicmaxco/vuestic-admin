import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
import VuesticTreeNodeMapper from './VuesticTreeNodeMapper'

export default class VuesticTreeNodeCategoryMapper {
  static map (categoryData) {
    const category = new VuesticTreeNodeCategory({
      icon: categoryData.icon,
      label: categoryData.label,
      isOpen: categoryData.isOpen,
    })

    const children = categoryData.children.map(nodeData => {
      const isCategory = !!nodeData.children
      if (isCategory) {
        return VuesticTreeNodeCategoryMapper.map(nodeData)
      }
      return VuesticTreeNodeMapper.map(nodeData)
    })
    category.children = children

    return category
  }

  /**
   * @param category VuesticTreeNodeCategory
   */
  static transform (category) {
    return {
      icon: category.icon,
      label: category.label,
      children: category.children.map(node => {
        if (node instanceof VuesticTreeNodeCategory) {
          return VuesticTreeNodeCategoryMapper.transform(node)
        }
        return VuesticTreeNodeMapper.transform(node)
      }),
      isOpen: category.isOpen
    }
  }
}
