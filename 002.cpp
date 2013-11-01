#include <iostream>
using namespace std;

int main(void) {
    long fib[4000];
    fib[0] = 1;
    fib[1] = 2;
    long answer = 0;
    for(int i=0 ; fib[i] <4000000 ; i++) {
        fib[i+2] = fib[i+1] + fib[i];
        if(fib[i] % 2 == 0 ) {
            answer += fib[i];
        }
    }
    cout << answer ;
    return 0;
}
