#include <iostream>
using namespace std;

template<typename T>
bool search(T *m[], int n, T&b)
{
	for (int i = 0;i < n; i++)// duyet mang
	{
		if (m[i] == b) 
		{
			return true;
		}
	}
	return false;
}
template <typename T>
void input(T *m[],int n)
{
	for (int i = 0; i < n;i++) {
		cin >> m[i];
	}
}
template <typename T>
void print(T *m[], int n) {
	for (int i = 0; i < n;i++)
	{
		cout<< m[i];
	}
}

int main() {
	int n;
	cin >> n;
	int *a = new int[n];
	return 0;
}