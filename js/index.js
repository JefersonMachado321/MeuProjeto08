import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});
const sound = Sound();
Events({ sound, timer, controls });
//Event-Driven
//Programação  Imperativa
//callback
//Dom
//Document object model modelagem do meu documento
//Refatoração:mudar um código para deixálo- mais entendivel
//Deixar o codigo mais perfomartico
//SEM ALTERAR suas funcionalidades
