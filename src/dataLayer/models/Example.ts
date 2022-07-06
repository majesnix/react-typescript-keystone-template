import { model, Model, prop } from "mobx-keystone";

@model("Example")
export default class Example extends Model({
  id: prop<string | undefined>(),
  header: prop<string | undefined>(),
}) {}
