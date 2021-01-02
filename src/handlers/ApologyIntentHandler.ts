import { HandlerInput } from "ask-sdk-core";
import { environment, RequestTypeEnum, ApplicationEnum } from "../utils";
import { prefix, who, what } from "../data";

const { skillName } = environment;

const getRandomArrayIndex = (array: Array<any>) => {
  return Math.floor(Math.random() * array.length);
};

const getRandomPhrase = () => {
  const phraseArray = [
    prefix[getRandomArrayIndex(prefix)],
    who[getRandomArrayIndex(who)],
    what[getRandomArrayIndex(what)],
  ];

  return phraseArray.join(" ");
};

export const ApologyIntentHandler = {
  canHandle({ requestEnvelope }: HandlerInput) {
    const { request } = requestEnvelope;
    return (
      request.type === RequestTypeEnum.IntentRequest &&
      request.intent.name === ApplicationEnum.ApologyIntent
    );
  },
  async handle({ responseBuilder }: HandlerInput) {
    let speechText = getRandomPhrase();
    return responseBuilder
      .speak(speechText)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};
