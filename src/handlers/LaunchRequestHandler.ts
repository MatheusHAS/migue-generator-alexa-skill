import { HandlerInput } from "ask-sdk-core";
import { environment, RequestTypeEnum } from "../utils";

const { skillName } = environment;

export const LaunchRequestHandler = {
  canHandle({ requestEnvelope }: HandlerInput) {
    return requestEnvelope.request.type === RequestTypeEnum.LaunchRequest;
  },
  handle({ responseBuilder }: HandlerInput) {
    const speechText = `Bem vindo ao ${skillName}. Você pode pedir uma desculpa dizendo me vê uma desculpa aí. `;
    return responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};
