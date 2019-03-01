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
        <pre>code must be here</pre>
      </div>
    </VbContainer>
    <VbContainer>
      <div>
        <p>without content class (pre)</p>
        <pre>code must be here</pre>
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
  </VbDemo>
</template>

<script>
export default {
}
</script>
