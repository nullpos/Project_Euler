#include <iostream>

long long int answer = 0 ;
int l_prime[2000000] ;
int m=1;

int create_p();

int main(void) {
	create_p();
	for (int i=1; l_prime[i]<=2000000 ; i++) {
		answer += l_prime[i];
	}
	std::cout << answer << std::endl ;
}

int create_p() {
	int l=1;
	l_prime[1] = 2;
	int max_p = 2000000;
	for (int p=2 ; p<=max_p ; p++) {
		l=0;
		for (int q=1 ; q<=m ; q++) {
			if (p % l_prime[q] != 0) {
				l++;
			}
			if (l==m){
				m++;
				l_prime[m] = p;
				std::cout << l_prime[m] << std::endl ;
			}
		}
	}
}