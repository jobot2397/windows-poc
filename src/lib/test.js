import { ID, TablesDB } from "appwrite";

const tablesDB = new TablesDB(client);

const promise = tablesDB.createRow({
  databaseId: "6906f2d2002adef1d83d",
  tableId: "test-table",
  rowId: ID.unique(),
  data: { title: "Hamlet" },
});

promise.then(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  },
);
