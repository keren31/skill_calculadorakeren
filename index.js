/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido a Calculadora de Keren. Puedes decir Suma, Resta, Multiplicación, División, Potencia o Tangente. ¿Qué operación te gustaría realizar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SumaIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2=handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        
        var numUno= Number(cantidad)
        var numDos= Number(cantidad2)
        
        if (isNaN(numUno) || isNaN(numDos)){
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado=0;
        resultado= numUno + numDos;
        const speakOutput = `Calculadora UTHH Keren... El resultado de la suma de ${numUno} mas ${numDos} es igual a ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt i you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RestaIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2=handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        
        var numUno= Number(cantidad)
        var numDos= Number(cantidad2)
        
        if (isNaN(numUno) || isNaN(numDos)){
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado=0;
        resultado= numUno - numDos;
        const speakOutput = `Calculadora UTHH Keren... El resultado de la resta de ${numUno} mas ${numDos} es igual a ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt i you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MultiplicacionIntent';
    },
    handle(handlerInput) {
        const requestAttributes=handlerInput.attributesManager.getRequestAttributes();
        const cantidad=handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2=handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        
        var numUno= Number(cantidad)
        var numDos= Number(cantidad2)
        
        if (isNaN(numUno) || isNaN(numDos)){
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        let resultado=0;
        resultado= numUno * numDos;
        const speakOutput = `Calculadora UTHH Keren... El resultado de la Multiplicacion de ${numUno} mas ${numDos} es igual a ${resultado}`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt i you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DivisionIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const cantidad1 = handlerInput.requestEnvelope.request.intent.slots.numUno.value;
        const cantidad2 = handlerInput.requestEnvelope.request.intent.slots.numDos.value;
        const numero1 = Number(cantidad1);
        const numero2 = Number(cantidad2);
        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }
        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no puedo dividir por cero. Por favor, proporciona un divisor diferente.')
                .getResponse();
        }
        
        const resultado = numero1 / numero2;
        
        const speakOutput = `Calculadora UTHH Keren... El resultado de dividir ${numero1} entre ${numero2} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const PotenciaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotenciaIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const base = handlerInput.requestEnvelope.request.intent.slots.base.value;
        const exponente = handlerInput.requestEnvelope.request.intent.slots.exponente.value;
        const numeroBase = Number(base);
        const numeroExponente = Number(exponente);
        if (isNaN(numeroBase) || isNaN(numeroExponente)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = Math.pow(numeroBase, numeroExponente);

        const speakOutput = `Calculadora UTHH Keren... El resultado de elevar ${numeroBase} a la potencia de ${numeroExponente} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const TangenteIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TangenteIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const numero = handlerInput.requestEnvelope.request.intent.slots.numero.value;
        const numeroBase = Number(numero);
        if (isNaN(numeroBase)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender el número. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = Math.tan(numeroBase);

        const speakOutput = `Calculadora UTHH Keren... La tangente de ${numeroBase} es igual a ${resultado}.`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes saludarme! Cómo puedo ayudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé nada de eso. Inténtalo de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        DivisionIntentHandler,
        MultiplicacionIntentHandler,
        PotenciaIntentHandler,
        TangenteIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();