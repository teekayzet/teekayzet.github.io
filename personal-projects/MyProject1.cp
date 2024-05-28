#line 1 "D:/SCHOOL/Github/teekayzet.github.io/personal-projects/MyProject1.c"

void main()
{
 TRISB = 0;
 TRISC5_bit = 0;
 ANSELB = 0;
 ANSELC = 0;

 do
 {
 LATB.B0 = 1;
 LATB.B1 = 0;
 LATC.B5 = 1;
 Delay_ms(5000);

 LATB.B0 = 0;
 LATB.B1 = 1;
 LATC.B5 = 1;
 Delay_ms(1000);

 LATB.B0 = 0;
 LATB.B1 = 0;
 LATC.B5 = 0;
 Delay_ms(5000);
 } while(1);
}
