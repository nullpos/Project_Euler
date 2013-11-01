#include <iostream>
#include <cmath>

int main(void) {
	for(int a=1;a<=1000;a++) {
	for(int b=1;b<=1000;b++) {
	for(int c=1;c<=1000;c++) {
		if(c<a|c<b|b<a) { continue; }
		if( pow(a,2) + pow(b,2) != pow(c,2)) { continue; }
		if(a+b+c != 1000) { continue; }
		std::cout << a*b*c << std::endl ;
	}
	}
	}
}
