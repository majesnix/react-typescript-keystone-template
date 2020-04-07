import { model, Model, prop, modelAction } from "mobx-keystone";
import Example from "../models/Example";

@model("ExampleStore")
export default class ExampleStore extends Model({
  examples: prop<Example[]>(() => []),
}) {
  @modelAction
  add(example: Example) {
    this.examples.push(example);
  }

  @modelAction
  reset() {
    this.examples.length = 0;
  }
}
