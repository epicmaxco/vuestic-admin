<template>
  <vuestic-tree-root>

    <vuestic-tree-category label="Electronics">
      <vuestic-tree-node v-for="electronic in electronics" :key="electronic.id">
        <div class="form-group">
          <div class="input-group">
            <input id="simple-input" required="required"
                   v-model="electronic.name">
            <label for="simple-input" class="control-label">Electronic</label>
            <i class="bar"></i>
          </div>
        </div>
      </vuestic-tree-node>
    </vuestic-tree-category>

    <vuestic-tree-category isOpen label="Products">
      <vuestic-tree-node v-for="product in products" :key="product.id">
        <div class="form-group">
          <div class="input-group">
            <input id="simple-input" required="required" v-model="product.name">
            <label for="simple-input" class="control-label">Product</label>
            <i class="bar"></i>
          </div>
        </div>
        <div slot="iconRight" class="icon" @click="removeProduct(product)">
          <span aria-hidden="true"
                class="ion ion-md-close"/>
        </div>
      </vuestic-tree-node>
      <vuestic-tree-node>
        <button class="btn btn-primary btn-micro"
                @click="addProduct()"
        >
          Add new product
        </button>
      </vuestic-tree-node>
    </vuestic-tree-category>

  </vuestic-tree-root>
</template>

<script>
  export default {
    name: 'tree-view-editable-preview',
    data () {
      return {
        electronics: [
          { id: 1, name: 'Cellphones' },
          { id: 2, name: 'Camera Body Kits' },
          { id: 3, name: 'External HDDs' },
        ],
        products: [
          { id: 4, name: 'Cables' },
          { id: 5, name: 'Monitors' },
          { id: 6, name: 'Keyboards' },
        ]
      }
    },
    methods: {
      addProduct () {
        this.products.push({
          id: this.products[this.products.length - 1].id,
          name: 'New product'
        })
      },
      removeProduct (product) {
        this.products = this.products.filter(productToFilter => productToFilter !== product)
      }
    },
  }
</script>
