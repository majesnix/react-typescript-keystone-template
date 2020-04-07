import { detach, rootRef } from "mobx-keystone";
import Example from "../models/Example";

/**
 * Used for referencing a existing model instance
 */
const ExampleRef = rootRef<Example>("ExampleRef", {
  getId(maybeExample) {
    return maybeExample instanceof Example ? maybeExample.id : undefined;
  },

  onResolvedValueChange(ref, newExample, oldExample) {
    if (oldExample && !newExample) {
      detach(ref);
    }
  },
});

export default ExampleRef;
