#include <iostream>
#include <cstdlib>
#include <cmath>

using namespace std;

int r_sum = 0;
int sum_r = 0;
int sum;
int answer;

int main(void) {
	for (int i = 0; i<101 ; i++) {
		r_sum += pow(i,2);
		sum += i;
	}
	sum_r = pow(sum,2);
	answer = abs(sum_r-r_sum);
	cout << answer << endl;
}