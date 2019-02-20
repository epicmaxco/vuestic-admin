<template>
  <VbDemo>
    <VbContainer style="width: 900px;" title="Default accordion">
      <va-accordion>
        <va-collapse>
          <span slot="header"> Default collapse </span>
          <div slot="body">
            <div>
              Expand first content
            </div>
          </div>
        </va-collapse>
        <va-collapse withBackground>
          <span slot="header">Collapse with background</span>
          <div slot="body">
            <div>
              Expand three content
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </VbContainer>
    <VbContainer style="width: 900px;" title="Expand accordion">
      <va-accordion expand>
        <va-collapse>
          <span slot="header"> Default collapse </span>
          <div slot="body">
            <div>
              Expand first content
            </div>
          </div>
        </va-collapse>
        <va-collapse customHeader>
          <span slot="header">
            <va-button>
              No-header collapse
            </va-button>
          </span>
          <div slot="body">
            <div>
              Expand three content
            </div>
          </div>
        </va-collapse>
      </va-accordion>
    </VbContainer>
  </VbDemo>
</template>
