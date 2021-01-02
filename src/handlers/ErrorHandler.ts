import { HandlerInput } from "ask-sdk-core";

export const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle({ responseBuilder }: HandlerInput, error: Error) {
    console.log(`Error handled: ${error.message}`);
    const speechText = "Desculpe, não entendi o comando. Diga novamente.";
    return responseBuilder.speak(speechText).reprompt(speechText).getResponse();
  },
};
