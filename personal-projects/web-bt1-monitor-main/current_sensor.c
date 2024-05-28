#define _XTAL_FREQ 32000000 // Define the crystal frequency

void main()
{
    TRISB = 0; // Configure PORTB as output

    do
    {
        LATB = 0x00; // Set PORTB pins to 0
        Delay_ms(1000); // Delay for 1 second

        LATB = 0xFF; // Set PORTB pins to 1
        Delay_ms(1000); // Delay for 1 second
    } while(1); // Infinite loop
}
