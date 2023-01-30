import * as uuid from "uuid";
import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "@serverless-stack/node/table";export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  
  
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
};
