#include <iostream>
// #include "Fraction.h"
using namespace std;
class Fraction
{
private:
	float numerator, denominator;
public:
	void input();
	void  print();
	float add(Fraction a, Fraction b);

};
void Fraction::input() {
		cin >> numerator >> denominator;
}

float Fraction::add(Fraction a, Fraction b) {
	cout << a.numerator << "/" << a.denominator << "+" << b.numerator << "/" << b.denominator << "=";
	return (a.numerator / a.denominator) + (b.numerator / b.denominator);
	
}
void  Fraction::print() {
	cout << numerator << "/" << denominator ;
}
int main() {
	Fraction x, *y;
	y= new Fraction();
	cout << "nhap phan so 1: ";
	x.input();
	cout << " nhap phan so 2: ";
	y->input();
	cout << "phan so 1:";
	x.print();
	cout << endl;
	cout << "phan so 2:";
	y->print();
	cout << endl;
	cout <<y->add(x, *y);
}
// int main() {
// 	Fraction x, y;
// 	cout << "nhap phan so 1: ";
// 	x.input();
// 	cout << " nhap phan so 2: ";
// 	y.input();
// 	cout << "phan so 1:";
// 	x.print();
// 	cout << endl;
// 	cout << "phan so 2:";
// 	y.print();
// 	cout << endl;
// 	cout<<y.add(x, y);
// }