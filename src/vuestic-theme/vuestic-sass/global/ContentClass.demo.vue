<template>
  <VbDemo>
    <VbCard title="with content class (h1-h6)">
      <div class="content">
        <h1>h1 title</h1>
        <h2>h2 title</h2>
        <h3>h3 title</h3>
        <h4>h4 title</h4>
        <h5>h5 title</h5>
        <h6>h6 title</h6>
      </div>
    </VbCard>
    <VbCard title="without content class (h1-6)">
      <div>
        <h1>h1 title</h1>
        <h2>h2 title</h2>
        <h3>h3 title</h3>
        <h4>h4 title</h4>
        <h5>h5 title</h5>
        <h6>h6 title</h6>
      </div>
    </VbCard>
    <VbCard title="with content class (pre)">
      <div class="content">
        <pre>pre text must be here</pre>
        <p>class: code</p>
        <pre class="code">code must be here</pre>
      </div>
    </VbCard>
    <VbCard title="without content class (pre)">
      <div>
        <pre>pre text must be here</pre>
      </div>
    </VbCard>
    <VbCard title="with content class (lists)">
      <div class="content">
        <ol>
          <li>item 1</li>
          <li>item 2
            <ol>
              <li>item 2.1</li>
              <li>item 2.2</li>
            </ol>
          </li>
          <li>item 3</li>
          <li>item 4</li>
        </ol>
        <ul>
          <li>item 1</li>
          <li>item 2
            <ul>
              <li>item 2.1</li>
              <li>item 2.2</li>
            </ul>
          </li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    </VbCard>
    <VbCard title="without content class (lists)">
      <ol>
        <li>item 1</li>
        <li>item 2
          <ol>
            <li>item 2.1</li>
            <li>item 2.2</li>
          </ol>
        </li>
        <li>item 3</li>
        <li>item 4</li>
      </ol>
      <ul>
        <li>item 1</li>
        <li>item 2
          <ul>
            <li>item 2.1</li>
            <li>item 2.2</li>
          </ul>
        </li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </VbCard>
    <VbCard title="with content (blockquote)">
      <div class="content">
        <blockquote>
          <p>this is great blockquote</p>
          <p>author</p>
        </blockquote>
      </div>
    </VbCard>
    <VbCard title="without content (blockquote)">
      <blockquote>
        <p>this is great blockquote</p>
        <p>author</p>
      </blockquote>
    </VbCard>
    <VbCard title="with content (figure)">
      <div class="content">
        <figure>
          <img src="https://i.imgur.com/NLrdqsk.png"/>
          <figcaption>Name of picture</figcaption>
        </figure>
      </div>
    </VbCard>
    <VbCard title="without content (figure)">
      <figure>
        <img src="https://i.imgur.com/NLrdqsk.png"/>
        <figcaption>Name of picture</figcaption>
      </figure>
    </VbCard>
    <VbCard title="with content (table)">
      <div class="content">
        <table>
          <thead>
          <tr>
            <th v-for="(data, index) in tableData[0]" :key="index">{{data}}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(data, index) in tableData" :key="index" v-if="index !== 0">
            <td v-for="(i, index) in data" :key="index">{{i}}</td>
          </tr>
          </tbody>
        </table>
        <p>striped</p>
        <table class="striped">
          <thead>
          <tr>
            <th v-for="(data, index) in tableData[0]" :key="index">{{data}}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(data, index) in tableData" :key="index" v-if="index !== 0">
            <td v-for="(i, index) in data" :key="index">{{i}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </VbCard>
    <VbCard title="without content (table)">
      <table>
        <thead>
        <tr>
          <th v-for="(data, index) in tableData[0]" :key="index">{{data}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, index) in tableData" :key="index" v-if="index !== 0">
          <td v-for="(i, index) in data" :key="index">{{i}}</td>
        </tr>
        </tbody>
      </table>
    </VbCard>
  </VbDemo>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        ['Id', 'FooBar type', 'Actions'],
        ['1', 'Zebra', 'Delete'],
        ['2', 'Not Zebra', 'Remove'],
        ['3', 'Very Zebra', 'Eradicate'],
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '../resources/resources';
@import 'typography';
@import 'utility-global';
@import "content";
</style>
