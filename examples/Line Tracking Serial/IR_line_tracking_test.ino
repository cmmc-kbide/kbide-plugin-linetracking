#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include "CMMC_LineTracking.h"

LINETRACKING line1;
void setup()
{
  Serial.begin(115200);
  line1.begin(36);
}
void loop()
{
  Serial.print(((String("Line Detect : ")+String((line1.readDigitalValue())))));
  Serial.println(((String(" level: ")+String((line1.lineDetectLevel())))));
  delay(100);
}
