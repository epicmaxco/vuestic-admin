import VuesticTreeNodeCategory from './VuesticTreeNodeCategory'
import VuesticTreeNode from './VuesticTreeNode'

export default class VuesticTreeNodeCategoryMapper {
  static map (categoryData) {
    const category = new VuesticTreeNodeCategory(categoryData)


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
        return VuesticTree.transform(node)
      }),
      isOpen: category.isOpen
    }
  }
}
