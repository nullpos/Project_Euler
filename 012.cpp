#include <iostream>


int main(){
	int k=0;
	int n=0;
	for(int i=1;k<500;i++){
		k = 0;
		n += i;
		for(int j=1;j<n;j++){
			if(n%j == 0){
				k++;
			}
		}
	}
	std::cout << n << std::endl;
}