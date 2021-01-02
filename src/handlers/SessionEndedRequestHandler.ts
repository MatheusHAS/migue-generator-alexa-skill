import { HandlerInput } from "ask-sdk-core";
import { RequestTypeEnum } from "../utils";

export const SessionEndedRequestHandler = {
  canHandle({ requestEnvelope }: HandlerInput) {
    const { request }: any = requestEnvelope;
    console.log(`Request Type: ${request.type}`);
    console.log(`Intent: ${request?.intent?.name}`);
    return request.type === RequestTypeEnum.SessionEndedRequest;
  },
  handle(handlerInput: HandlerInput) {
    return handlerInput.responseBuilder.getResponse();
  },
};
