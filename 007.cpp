#include <iostream>

int l_prime[10002];
int m = 1;
int l = 0;

int chkprime(int num);

int main(void) {
	l_prime[1] = 2;
	for(int i=2; m<=10002 ; i++){
		chkprime(i);
	}
	std::cout << l_prime[10001] << std::endl;
}

int chkprime(int num) {
	l = 0;
	for (int k=1 ;k<=m; k++) {
		if(num % l_prime[k] == 0) {
		} else {
			l++;
		}
	}
	if (l == m) {
		m++;
		l_prime[m] = num;
	}
}