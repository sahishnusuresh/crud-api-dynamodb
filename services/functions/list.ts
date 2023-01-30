import * as uuid from "uuid";
import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "@serverless-stack/node/table";
const dynamodb=new DynamoDB.DocumentClient()
export const handler:APIGatewayProxyHandlerV2=async(event)=>{
    const params={
        TableName:Table.hello.tableName,
        Key:{
            userId:event.pathParameters.id1,
            noteId:event.pathParameters.id,
        }

}   
let result=await dynamodb.get(params).promise()
if(result.Item==null){
    return({
        status:200,
        body:"user not found"
    })   
}else
return({
    status:200,
    body:JSON.stringify(result.Item)
})
}
