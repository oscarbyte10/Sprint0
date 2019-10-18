#include "emisoraBLE.h";

emisoraBLE emisora = emisoraBLE();


// ----------------------------------------------------
// setup
// ----------------------------------------------------

void setup() {
   //
   //
   //
   Serial.begin(115200);
   while ( !Serial )delay(10);

   Serial.println("-----------------------\n");
   Serial.println(" PRUEBAS iBeacon  ");
   Serial.println("-----------------------\n");
   emisora.inicializar();
}

// ....................................................
void loop() {
   delay(1000);
   medirYPublicar();   
   
} // ()
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
void medirYPublicar(){
   int medida = random(1, 100);
   emisora.anunciarO3(medida);
}