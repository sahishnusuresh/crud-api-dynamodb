import { StackContext, Api ,Table} from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const table=new Table(stack,"hello",{
    fields:{
      userId:"string",
      noteId:"string",
      content:"string",
      createdAt:"string"
    },
    primaryIndex:{
      partitionKey:"userId",
      sortKey:"noteId"
    }
  })
  const api = new Api(stack, "api", {
    defaults:{
      function:{
        bind:[table]
      }
    },
    routes: {
      "GET /notes/{id}/{id1}":"functions/list.handler",
      "GET /notes":"functions/listall.handler",
      "POST /notes": "functions/create.handler",
      "PUT /notes/{id}":"functions/update.handler",
      "DELETE /notes/{id}":"functions/delete.handler"
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
