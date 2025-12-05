#include "Fraction.h"
int main() {
	Fraction x, y;
	cout << "nhap phan so 1: ";
	x.input();
	cout << " nhap phan so 2: ";
	y.input();
	cout << "phan so 1:";
	x.print();
	cout << endl;
	cout << "phan so 2:";
	y.print();
	cout << endl;
	y.add(x, y);
}