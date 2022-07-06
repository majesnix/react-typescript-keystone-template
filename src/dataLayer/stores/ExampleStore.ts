import {
  model,
  Model,
  prop,
  modelAction,
  modelFlow,
  _async,
  _await,
} from "mobx-keystone";
import ApiClient from "../api/ApiClient";
import Example from "../models/Example";

@model("ExampleStore")
export default class ExampleStore extends Model({
  examples: prop<Example[]>(() => []),
}) {
  @modelFlow
  getExamples = _async(function* (this: ExampleStore) {
    this.examples = yield* _await(ApiClient.getExamples());
  });

  @modelAction
  add(example: Example) {
    this.examples.push(example);
  }

  @modelAction
  reset() {
    this.examples.length = 0;
  }
}
