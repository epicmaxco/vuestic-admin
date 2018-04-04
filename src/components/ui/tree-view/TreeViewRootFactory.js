// export default class TreeViewRootFactory {
//   static products () {
//     return new VuesticTreeRoot([
//       new VuesticTreeNodeCategory({
//         label: 'Products',
//         children: [
//           new VuesticTreeNodeCategory({
//             label: 'Cables',
//             children: [
//               new VuesticTreeNode({
//                 label: 'Audio'
//               }),
//               new VuesticTreeNode({
//                 label: 'Video'
//               }),
//               new VuesticTreeNode({
//                 label: 'Optical'
//               })
//             ]
//           }),
//           new VuesticTreeNode({
//             label: 'Monitors'
//           }),
//           new VuesticTreeNode({
//             label: 'Keyboards'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         label: 'Electronics',
//         isOpen: true,
//         children: [
//           new VuesticTreeNode({
//             label: 'Cellphones'
//           }),
//           new VuesticTreeNode({
//             label: 'Camera Body Kits',
//             selected: true
//           }),
//           new VuesticTreeNode({
//             label: 'External HDDs'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         label: 'Apparel',
//         children: [
//           new VuesticTreeNode({
//             label: 'Jackets'
//           }),
//           new VuesticTreeNode({
//             label: 'Pants'
//           }),
//           new VuesticTreeNode({
//             label: 'Skirts'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         label: 'Furniture',
//         children: [
//           new VuesticTreeNode({
//             label: 'Chairs'
//           }),
//           new VuesticTreeNode({
//             label: 'Bedrooms'
//           }),
//           new VuesticTreeNode({
//             label: 'Tables'
//           })
//         ]
//       })
//     ])
//   }
//
//   static personalDocuments () {
//     return new VuesticTreeRoot([
//       new VuesticTreeNodeCategory({
//         label: 'Photos',
//         children: [
//           new VuesticTreeNode({
//             label: '2007'
//           }),
//           new VuesticTreeNode({
//             label: 'Wedding'
//           }),
//           new VuesticTreeNode({
//             label: 'Stars'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         label: 'Music',
//         isOpen: true,
//         children: [
//           new VuesticTreeNode({
//             label: 'Taylor_swift_hello.mp3'
//           }),
//           new VuesticTreeNode({
//             label: 'straight_to_the_bank.wav',
//             selected: true
//           }),
//           new VuesticTreeNode({
//             label: 'imagine_dragons_promo.mp3'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         label: 'Apparel',
//         children: [
//           new VuesticTreeNode({
//             label: 'Jackets'
//           }),
//           new VuesticTreeNode({
//             label: 'Pants'
//           }),
//           new VuesticTreeNode({
//             label: 'Skirts'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         label: 'Furniture',
//         children: [
//           new VuesticTreeNode({
//             label: 'Chairs'
//           }),
//           new VuesticTreeNode({
//             label: 'Bedrooms'
//           }),
//           new VuesticTreeNode({
//             label: 'Tables'
//           })
//         ]
//       })
//     ])
//   }
//
//
//   static personalDocumentsWithCustomIcons () {
//     return new VuesticTreeRoot([
//       new VuesticTreeNodeCategory({
//         icon: 'ion ion-md-photos',
//         label: 'Photos',
//         children: [
//           new VuesticTreeNode({
//             icon: 'ion ion-md-planet',
//             label: '2007'
//           }),
//           new VuesticTreeNode({
//             icon: 'ion ion-md-sunny',
//             label: 'Wedding'
//           }),
//           new VuesticTreeNode({
//             icon: 'ion ion-md-star',
//             label: 'Stars'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         label: 'Music',
//         icon: 'ion ion-md-star-outline',
//         isOpen: true,
//         children: [
//           new VuesticTreeNode({
//             icon: 'ion ion-md-musical-notes',
//             label: 'Taylor_swift_hello.mp3'
//           }),
//           new VuesticTreeNode({
//             icon: 'ion ion-md-musical-notes',
//             label: 'straight_to_the_bank.wav',
//             selected: true
//           }),
//           new VuesticTreeNode({
//             icon: 'ion ion-md-musical-notes',
//             label: 'imagine_dragons_promo.mp3'
//           })
//         ]
//       }),
//       new VuesticTreeNodeCategory({
//         icon: 'ion ion-md-flower',
//         label: 'Miscellaneous',
//         children: [
//           new VuesticTreeNode({
//             icon: 'ion ion-md-done-all',
//             label: 'Papers'
//           }),
//           new VuesticTreeNode({
//             icon: 'ion ion-md-done-all',
//             label: 'Clips'
//           }),
//           new VuesticTreeNode({
//             icon: 'ion ion-md-done-all',
//             label: 'Pen holders'
//           })
//         ]
//       })
//     ])
//   }
// }
