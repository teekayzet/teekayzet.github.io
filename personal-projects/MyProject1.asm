
_main:

;MyProject1.c,2 :: 		void main()
;MyProject1.c,4 :: 		TRISB = 0; // Configure PORTB as output
	CLRF        TRISB+0 
;MyProject1.c,5 :: 		TRISC5_bit = 0;
	BCF         TRISC5_bit+0, BitPos(TRISC5_bit+0) 
;MyProject1.c,6 :: 		ANSELB = 0;
	CLRF        ANSELB+0 
;MyProject1.c,7 :: 		ANSELC = 0;
	CLRF        ANSELC+0 
;MyProject1.c,9 :: 		do
L_main0:
;MyProject1.c,11 :: 		LATB.B0 = 1; // Set PORTB pins to 0
	BSF         LATB+0, 0 
;MyProject1.c,12 :: 		LATB.B1 = 0;
	BCF         LATB+0, 1 
;MyProject1.c,13 :: 		LATC.B5 = 1;
	BSF         LATC+0, 5 
;MyProject1.c,14 :: 		Delay_ms(5000); // Delay for 1 second
	MOVLW       203
	MOVWF       R11, 0
	MOVLW       236
	MOVWF       R12, 0
	MOVLW       132
	MOVWF       R13, 0
L_main3:
	DECFSZ      R13, 1, 1
	BRA         L_main3
	DECFSZ      R12, 1, 1
	BRA         L_main3
	DECFSZ      R11, 1, 1
	BRA         L_main3
	NOP
;MyProject1.c,16 :: 		LATB.B0 = 0; // Set PORTB pins to 1
	BCF         LATB+0, 0 
;MyProject1.c,17 :: 		LATB.B1 = 1;
	BSF         LATB+0, 1 
;MyProject1.c,18 :: 		LATC.B5 = 1;
	BSF         LATC+0, 5 
;MyProject1.c,19 :: 		Delay_ms(1000); // Delay for 1 second
	MOVLW       41
	MOVWF       R11, 0
	MOVLW       150
	MOVWF       R12, 0
	MOVLW       127
	MOVWF       R13, 0
L_main4:
	DECFSZ      R13, 1, 1
	BRA         L_main4
	DECFSZ      R12, 1, 1
	BRA         L_main4
	DECFSZ      R11, 1, 1
	BRA         L_main4
;MyProject1.c,21 :: 		LATB.B0 = 0; // Set PORTB pins to 1
	BCF         LATB+0, 0 
;MyProject1.c,22 :: 		LATB.B1 = 0;
	BCF         LATB+0, 1 
;MyProject1.c,23 :: 		LATC.B5 = 0;
	BCF         LATC+0, 5 
;MyProject1.c,24 :: 		Delay_ms(5000); // Delay for 1 second
	MOVLW       203
	MOVWF       R11, 0
	MOVLW       236
	MOVWF       R12, 0
	MOVLW       132
	MOVWF       R13, 0
L_main5:
	DECFSZ      R13, 1, 1
	BRA         L_main5
	DECFSZ      R12, 1, 1
	BRA         L_main5
	DECFSZ      R11, 1, 1
	BRA         L_main5
	NOP
;MyProject1.c,25 :: 		} while(1); // Infinite loop
	GOTO        L_main0
;MyProject1.c,26 :: 		}
L_end_main:
	GOTO        $+0
; end of _main
