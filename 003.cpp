#include <iostream>
using namespace std;

long long int Num = 600851475143;
long long int i = 3;

int main(void) {
    while( i<=Num ) {
        if (Num % i == 0) {
            Num = Num / i;
            i--;
        }
        i++;
    }
    cout << i ;
    return 0;
}