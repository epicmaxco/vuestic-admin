## Intention

This component is meant to work as predictable separator in different environments.
Separator might be aware of its parent or nearby elements.

CSS checks are shallow. So if you wrap or move separator a bit outside of what is considered a special case - they won't function. 

* When used in context of .va-card it occupies the full width.
* When used after .va-tab element there is no margin between tab and separator.
