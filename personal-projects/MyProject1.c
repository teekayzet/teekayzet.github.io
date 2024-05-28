
void main()
{
    TRISB = 0; // Configure PORTB as output
    TRISC5_bit = 0;
    ANSELB = 0;
    ANSELC = 0;

    do
    {
        LATB.B0 = 1; // Set PORTB pins to 0
        LATB.B1 = 0;
        LATC.B5 = 1;
        Delay_ms(5000); // Delay for 1 second

        LATB.B0 = 0; // Set PORTB pins to 1
        LATB.B1 = 1;
        LATC.B5 = 1;
        Delay_ms(1000); // Delay for 1 second
        
        LATB.B0 = 0; // Set PORTB pins to 1
        LATB.B1 = 0;
        LATC.B5 = 0;
        Delay_ms(5000); // Delay for 1 second
    } while(1); // Infinite loop
}
