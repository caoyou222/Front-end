#include <iostream>
using namespace std;

int main()
{
	char input[80];
	cin >> input;
	int len;
	for (len = 0; input[len] != '\0'; ++len);
	if (input[len-1] == '1' && input[len-2] == '1') {cout << "True" << endl;}
	else {cout << "False" << endl;}
}