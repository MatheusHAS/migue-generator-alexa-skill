import { HandlerInput } from "ask-sdk-core";
import { environment, RequestTypeEnum, IntentNameEnum } from "../utils";

const { skillName } = environment;

export const CancelAndStopIntentHandler = {
  canHandle({ requestEnvelope }: HandlerInput) {
    const { request } = requestEnvelope;
    return (
      request.type === RequestTypeEnum.IntentRequest &&
      (request.intent.name === IntentNameEnum.CancelIntent ||
        request.intent.name === IntentNameEnum.StopIntent)
    );
  },
  handle({ responseBuilder }: HandlerInput) {
    const speechText = "Até mais!";
    return responseBuilder
      .speak(speechText)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};
