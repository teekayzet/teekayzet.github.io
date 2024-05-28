#line 1 "D:/SCHOOL/Github/teekayzet.github.io/personal-projects/web-bt1-monitor-main/current_sensor.c"


void main()
{
 TRISB = 0;

 do
 {
 LATB = 0x00;
 Delay_ms(1000);

 LATB = 0xFF;
 Delay_ms(1000);
 } while(1);
}
