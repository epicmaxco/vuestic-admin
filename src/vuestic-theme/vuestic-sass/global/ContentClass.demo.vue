<template>
  <VbDemo>
    <VbContainer>
      <div class="content">
        <p>with content class (h1-6)</p>
        <h1>h1 title</h1>
        <h2>h2 title</h2>
        <h3>h3 title</h3>
        <h4>h4 title</h4>
        <h5>h5 title</h5>
        <h6>h6 title</h6>
      </div>
    </VbContainer>
    <VbContainer>
      <div>
        <p>without content class (h1-6)</p>
        <h1>h1 title</h1>
        <h2>h2 title</h2>
        <h3>h3 title</h3>
        <h4>h4 title</h4>
        <h5>h5 title</h5>
        <h6>h6 title</h6>
      </div>
    </VbContainer>
    <VbContainer>
      <div class="content">
        <p>with content class (pre)</p>
        <pre>pre text must be here</pre>
        <p>class: code</p>
        <pre class="code">code must be here</pre>
      </div>
    </VbContainer>
    <VbContainer>
      <div>
        <p>without content class (pre)</p>
        <pre>pre text must be here</pre>
      </div>
    </VbContainer>
    <VbContainer>
      <div class="content">
        <p>with content class (lists)</p>
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
    </VbContainer>
    <VbContainer>
      <div>
        <p>without content class (lists)</p>
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
    </VbContainer>
    <VbContainer>
      <p>with content (blockquote)</p>
      <div class="content">
        <blockquote>
          <p>this is great blockquote</p>
          <p>author</p>
        </blockquote>
      </div>
    </VbContainer>
    <VbContainer>
      <p>without content (blockquote)</p>
      <blockquote>
        <p>this is great blockquote</p>
        <p>author</p>
      </blockquote>
    </VbContainer>
    <VbContainer>
      <p>with content (figure)</p>
      <div class="content">
        <figure>
          <img src="https://i.imgur.com/NLrdqsk.png"/>
          <figcaption>Name of picture</figcaption>
        </figure>
        <figure class="warning">
          <img src="https://i.imgur.com/NLrdqsk.png"/>
          <figcaption>Name of picture</figcaption>
        </figure>
        <figure class="danger">
          <img src="https://i.imgur.com/NLrdqsk.png"/>
          <figcaption>Name of picture</figcaption>
        </figure>
        <figure class="bright">
          <img src="https://i.imgur.com/NLrdqsk.png"/>
          <figcaption>Name of picture</figcaption>
        </figure>
        <figure class="bright warning">
          <img src="https://i.imgur.com/NLrdqsk.png"/>
          <figcaption>Name of picture</figcaption>
        </figure>
      </div>
    </VbContainer>
    <VbContainer>
      <p>without content (figure)</p>
      <figure>
        <img src="https://i.imgur.com/NLrdqsk.png"/>
        <figcaption>Name of picture</figcaption>
      </figure>
    </VbContainer>
    <VbContainer>
      <p>with content (table)</p>
      <div class="content">
        <table>
          <thead>
          <tr>
            <td>head 1</td>
            <td>head 2</td>
            <td>head 3</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.1</td>
            <td>1.2</td>
            <td>1.3</td>
          </tr>
          <tr>
            <td>2.1</td>
            <td>2.2</td>
            <td>2.3</td>
          </tr>
          <tr>
            <td>3.1</td>
            <td>3.2</td>
            <td>3.3</td>
          </tr>
          </tbody>
        </table>
        <p>striped</p>
        <table class="striped">
          <thead>
          <tr>
            <td>head 1</td>
            <td>head 2</td>
            <td>head 3</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.1</td>
            <td>1.2</td>
            <td>1.3</td>
          </tr>
          <tr>
            <td>2.1</td>
            <td>2.2</td>
            <td>2.3</td>
          </tr>
          <tr>
            <td>3.1</td>
            <td>3.2</td>
            <td>3.3</td>
          </tr>
          </tbody>
        </table>
      </div>
    </VbContainer>
    <VbContainer>
      <p>without content (table)</p>
      <table>
        <thead>
        <tr>
          <td>head 1</td>
          <td>head 2</td>
          <td>head 3</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1.1</td>
          <td>1.2</td>
          <td>1.3</td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>2.2</td>
          <td>2.3</td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>3.2</td>
          <td>3.3</td>
        </tr>
        </tbody>
      </table>
    </VbContainer>
  </VbDemo>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  figure {
    display: inline-block;
    margin: 0.5rem;
  }
  table {
    * {
      border: 1px solid black;
    }
  }
</style>
