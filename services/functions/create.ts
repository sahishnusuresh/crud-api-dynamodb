import * as uuid from "uuid";
import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "@serverless-stack/node/table";

const dynamodb=new DynamoDB.DocumentClient()
export const handler:APIGatewayProxyHandlerV2=async(event)=>{
    const data=JSON.parse(event.body)
    const params={
        TableName:Table.hello.tableName,
        Item:{
            userId:data.id,
            noteId:uuid.v1(),
            content:data.content,
            createdAt:Date.now()
        }

    }
    await dynamodb.put(params).promise()
    return({
        status:200,
        body:JSON.stringify(params.Item)
    })
}