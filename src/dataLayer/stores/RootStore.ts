import { model, Model, prop } from "mobx-keystone";
import ExampleStore from "./ExampleStore";

@model("RootStore")
export default class RootStore extends Model({
  exampleStore: prop<ExampleStore>(),
}) {}
