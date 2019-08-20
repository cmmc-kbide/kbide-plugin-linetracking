/******************************************************************
 * IR Line Tracking sensor library for KB-IDE by chiang mai maker club
 *****************************************************************/

#include "CMMC_LineTracking.h"

LINETRACKING::LINETRACKING() {}
LINETRACKING::~LINETRACKING() {}

void LINETRACKING::begin(uint8_t _pin) {
  pinAnalog = _pin;
}

bool LINETRACKING::readDigitalValue() {
  pinMode(pinAnalog, INPUT_PULLUP);
  return digitalRead(pinAnalog);
}

unsigned int LINETRACKING::readAnalogValue() {
   return analogRead(pinAnalog);
}

unsigned int LINETRACKING::mapValue(int _value, int _fromLow, int _fromHigh, int _toLow, int _toHigh) {
  // map(value, fromLow, fromHigh, toLow, toHigh)
  return map(_value, _fromLow, _fromHigh, _toLow, _toHigh);
}

unsigned int LINETRACKING::lineDetectLevel() {
  return map(analogRead(pinAnalog), 4095, 0, 0, 100);
}