<template>
  <VbDemo>
    <VbContainer style="width: 900px;" title="Default collapse">
      <va-collapse>
        <span slot="header">Toggle collapse</span>
        <div slot="body">
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer style="width: 900px;" title="Collapse with custom header">
      <va-collapse customHeader>
        <va-button slot="header">
          Toggle collapse
        </va-button>
        <div slot="body">
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
        </div>
      </va-collapse>
    </VbContainer>
    <VbContainer title="Collapse with background color" style="width: 900px;">
      <va-collapse withBackground>
        <span slot="header"> Expand This Block </span>
        <div slot="body">
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
        </div>
      </va-collapse>
    </VbContainer>
  </VbDemo>
</template>
