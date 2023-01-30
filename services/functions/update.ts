import * as uuid from "uuid";
import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "@serverless-stack/node/table";

const dynamodb=new DynamoDB.DocumentClient()
export const handler:APIGatewayProxyHandlerV2=async(event)=>{
    const data=JSON.parse(event.body)
    const params={
        TableName:Table.hello.tableName,
        Key:{
            userId:"1",
            noteId:event.pathParameters.id
        },
        UpdateExpression:"SET content=:content",
        ExpressionAttributeValues:{
            ":content":data.content||null
        },
        ReturnValues:"ALL_NEW"
    }
    const results=await dynamodb.update(params).promise()
    return({
        status:200,
        body:JSON.stringify(results.Attributes)
    })
}