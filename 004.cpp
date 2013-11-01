#include <iostream>
#include <math.h>

using namespace std;

int Num;
int answer = 0;
int a[6];

int main(void) {
    for (int j=100; j<1000 ;j++ ) {
		for (int k=100; k<1000 ;k++ ) {
			Num = j*k;
			for( int i=6 ; 0<i ; i-- ) {
			a[i] = floor( ( Num - (floor(Num / pow(10,i) ) * pow(10,i) ) ) / pow(10,i-1) );
			}
			if(a[1]==a[6] && a[2]==a[5] && a[3]==a[4]) {
				if (answer < Num) {
				answer = Num;
				}
			}
		}
	}
	cout << answer ;
    return 0;
}