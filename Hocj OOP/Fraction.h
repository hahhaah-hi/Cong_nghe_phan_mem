// #pragma once
#include <iostream>

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

// void Fraction::input() {
// 	cin >> numerator >> denominator;
// }

// void Fraction::add(Fraction a, Fraction b) {
// cout << a.numerator << "/" << a.denominator << "+" << b.numerator << "/" << b.denominator << "=";
// cout << (a.numerator / a.denominator) + (b.numerator / b.denominator);

// }
// void  Fraction::print() {
// cout << numerator << "/" << denominator ;
// }
