---
# TEMPLATE — copy this file to src/content/documents/letters/<slug>.md
# and fill in. This is for letters whose METADATA is published but body is withheld.
# The doc template will render the metadata header and a "Withheld at the family's
# request" panel where the body would be; scans are also suppressed.
title: "Letter to <recipient>, <date>"
type: letter
author: charles-eesley
recipient: terrie-lee-eesley             # default — most letters are to Terrie.
                                         # use wilbur-eesley or margaret-mcmaster-eesley for the smaller set to his parents.
people:
  - charles-eesley
  - terrie-lee-eesley
partOf: letters-from-vietnam
locationFrom: "Saigon, Republic of Vietnam"
locationTo: "Marietta, Ohio"             # or University of Maryland if Terrie was there at the time
postmarkDate: "1970-MM-DD"        # canonical date field for letters — ISO YYYY-MM-DD when known
# (Do not also fill `dateRange` for letters — postmarkDate is the single source of truth.)
summary: "One-line outward description that doesn't compromise the contents. Optional."
source: "Original held in family archive — src/assets/family/originals/vietnam-letters/IMG_XXXX.jpeg (kept private)."
private: true                             # WITHHELD: body and scans suppressed publicly
# scans intentionally omitted — even if scan files live alongside other letters in
# src/assets/family/originals/vietnam-letters/, do NOT list them here on private letters.
# The doc template suppresses scans on private:true regardless, but omitting them
# from the frontmatter is the explicit signal that the family means them held back.
---

<!-- Even though this body won't render publicly, you can leave editorial notes here for
     the family's offline reference. The doc template hides the markdown body when
     private: true. -->
