/******************************************************************
 * IR Line Tracking sensor library for KB-IDE by chiang mai maker club
 ******************************************************************/

#ifndef cmmc_linetracking_h
#define cmmc_linetracking_h

#include <Arduino.h>


#if ARDUINO < 100
  #include <WProgram.h>
#else
  #include <Arduino.h>
#endif

class LINETRACKING
{
public:
  LINETRACKING();
  ~LINETRACKING();

  void begin(uint8_t _pin);
  bool readDigitalValue();
  unsigned int readAnalogValue();
  unsigned int mapValue(int _value, int _fromLow, int _fromHigh, int _toLow, int _toHigh);
  unsigned int lineDetectLevel();
  
protected:

private:
  int pinAnalog;
  
};

#endif /*cmmc_linetracking_h*/
