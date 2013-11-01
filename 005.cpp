#include <iostream>

using namespace std;

int m = 20;
int answer = 1;
int gc = 0;

int koyaku(int g,int k);

int main(void) {
	for (int i = 1; i <= m ; i++) {
		gc = koyaku(answer,i);
		answer = answer * (i/gc);
	}
	cout << answer ;
    return 0;
}

int koyaku(int g,int k) {
	int n;
	for (int l=1;l<=g;l++) {
		if(g%l==0 && k%l==0) {
			n = l;
		}
	}
	return n;
}