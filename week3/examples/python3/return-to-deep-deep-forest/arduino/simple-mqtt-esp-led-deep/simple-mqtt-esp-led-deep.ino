#include <WiFi.h>
#include <PubSubClient.h>
#include <Adafruit_NeoPixel.h>

const char* ssid = "xxx";
const char* password = "xxx";
const char* mqtt_server = "xxx";
const int mqtt_port = 1883;
const char* mqtt_topic = "led/control";

#define LED_PIN     5
#define LED_COUNT   8
#define BRIGHTNESS  50

WiFiClient espClient;
PubSubClient mqtt(espClient);
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

bool ledState = false;
uint32_t currentColor = strip.Color(255, 0, 0);
unsigned long lastWifiCheck = 0;
const long wifiCheckInterval = 5000;
unsigned long lastMqttRetry = 0;
const long mqttRetryInterval = 5000;

void setup() {
  Serial.begin(115200);
  strip.begin();
  strip.setBrightiness(BRIGHTNESS);
  strip.show();
  
  mqtt.setServer(mqtt_server, mqtt_port);
  mqtt.setCallback(mqttCallback);
  
  Serial.println("\nStarting up...");
  Serial.println("LED Pin: " + String(LED_PIN));
  Serial.println("LED Count: " + String(LED_COUNT));
}

void loop() {
  if (!isWifiConnected()) {
    Serial.println("WiFi disconnected");
    connectWifi();
    return;
  }

  if (!mqtt.connected()) {
    unsigned long now = millis();
    if (now - lastMqttRetry >= mqttRetryInterval) {
      lastMqttRetry = now;
      Serial.println("MQTT disconnected");
      reconnectMQTT();
    }
    return;
  }

  mqtt.loop();
}

bool isWifiConnected() {
  return WiFi.status() == WL_CONNECTED;
}

void connectWifi() {
  unsigned long now = millis();
  if (now - lastWifiCheck < wifiCheckInterval) return;
  lastWifiCheck = now;

  Serial.println("\nConnecting to WiFi: " + String(ssid));
  WiFi.begin(ssid, password);

  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 10) {
    delay(500);
    Serial.print(".");
    attempts++;
  }
  Serial.println("");

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("WiFi connected successfully");
    Serial.println("IP address: " + WiFi.localIP().toString());
  } else {
    Serial.println("WiFi connection failed after " + String(attempts) + " attempts");
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
  String message = "";
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  
  Serial.println("Received: " + message);
  
  if (message == "win") {
    Serial.println("Rainbow pattern!");
    ledState = true;
    rainbow(50);
  } 
  else if (message == "on") {
    ledState = true;
    updateLEDs();
  }
  else if (message == "off") {
    ledState = false;
    updateLEDs();
  }
  else if (message.startsWith("color:")) {
    String colorHex = message.substring(6);
    long color = strtol(colorHex.c_str(), NULL, 16);
    currentColor = strip.Color(
      (color >> 16) & 0xFF,
      (color >> 8) & 0xFF,
      color & 0xFF
    );
    ledState = true;
    updateLEDs();
  }
}

void updateLEDs() {
  for (int i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, ledState ? currentColor : 0);
  }
  strip.show();
}

void reconnectMQTT() {
  Serial.println("Attempting MQTT connection...");
  
  if (mqtt.connect("ESP32Client")) {
    mqtt.subscribe(mqtt_topic);
    Serial.println("MQTT Connected successfully");
    Serial.println("Subscribed to topic: " + String(mqtt_topic));
  } else {
    Serial.println("MQTT connection failed, rc=" + String(mqtt.state()));
  }
}