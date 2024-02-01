/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "First",
  lastName: "Last",
};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  firstName: "First",
  lastName: "Last",
  age: 27,
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

const obj = { firstName: "First", lastName: "Last" };
CRUD.insertRow(obj);

const updatedRow: RowElement = {
  firstName: "First",
  lastName: "Last",
  age: 27,
};
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
