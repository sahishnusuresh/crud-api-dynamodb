import * as uuid from "uuid";
import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "@serverless-stack/node/table";

const dynamodb=new DynamoDB.DocumentClient()
export const handler:APIGatewayProxyHandlerV2=async(event)=>{
    const params={
        TableName:Table.hello.tableName,
        Key:{
            userId:"1",
            noteId:event.pathParameters.id
        }
    }
    const result=await dynamodb.delete(params).promise()
    return({
        statusCode:200,
        
    })
}