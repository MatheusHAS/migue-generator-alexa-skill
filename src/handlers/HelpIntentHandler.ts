import { HandlerInput } from "ask-sdk-core";
import { environment, RequestTypeEnum, IntentNameEnum } from "../utils";

const { skillName } = environment;

export const HelpIntentHandler = {
  canHandle({ requestEnvelope }: HandlerInput) {
    const { request } = requestEnvelope;
    return (
      request.type === RequestTypeEnum.IntentRequest &&
      request.intent.name === IntentNameEnum.HelpIntent
    );
  },
  handle({ responseBuilder }: HandlerInput) {
    const speechText =
      "Você pode pedir uma desculpa dizendo me vê uma desculpa aí.";
    return responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};
