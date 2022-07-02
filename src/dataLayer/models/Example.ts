import { model, Model, prop } from "mobx-keystone";

@model("Example")
export default class Example extends Model({
  id: prop<string>(() => (Math.random() + 1).toString(36).substring(7)),
  header: prop<string | undefined>(() => "Init"),
}) {}
