#include <bluefruit.h>

class emisoraBLE{
    public:
    emisoraBLE(){}
    void inicializar(){

        //
        // Initialise the Bluefruit module
        //

        Serial.println("Initialise the Bluefruit nRF52 module");
        Bluefruit.begin();

   //
   // Set the advertised device name (keep it short!)
   //
   Serial.println("Setting Device Name to GTI-3A " );

   Bluefruit.setName("oscar");
   Bluefruit.ScanResponse.addName();

   Bluefruit.Advertising.stop(); // ya lo enchufo luego

    }

    void anunciarO3(int medida){
        //
        // Advertising packet
        //
        Bluefruit.Advertising.addFlags(BLE_GAP_ADV_FLAGS_LE_ONLY_GENERAL_DISC_MODE);
        Bluefruit.Advertising.addTxPower();

        Bluefruit.Advertising.addName();

        int major = random(1,100);
        int minor = random(1, 100);

        uint8_t beaconUUID[16] = {
     'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I',
     'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H'
     };
        BLEBeacon elBeacon( beaconUUID, major, minor, 73 );


   elBeacon.setManufacturer( 0x004c ); // aple id
   Bluefruit.Advertising.setBeacon( elBeacon );
   //
   //
   Bluefruit.Advertising.restartOnDisconnect(true);
   Bluefruit.Advertising.setInterval(32, 244);    // in unit of 0.625 ms
   Bluefruit.Advertising.setFastTimeout(30);      // number of seconds in fast mode
   Bluefruit.Advertising.start(0);                // 0 = Don't stop advertising after n seconds
    }

};