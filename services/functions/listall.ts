import * as uuid from "uuid";
import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "@serverless-stack/node/table";
const dynamodb= new DynamoDB.DocumentClient()
export const handler:APIGatewayProxyHandlerV2=async(event)=>{
    const params={
        TableName:Table.hello.tableName,
        // const user_ids:["1","2"],
        KeyConditionExpression:"userId=:userId",
        // FilterExpression:"userId in (:userId1,:userId2)",
        ExpressionAttributeValues:{
            ":userId":"1",
        }

    }
    const results=await dynamodb.query(params).promise()
    return({
        status:200,
        body:JSON.stringify(results.Items)
    })
}