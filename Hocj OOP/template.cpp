#include <iostream>
#include <string>
using namespace std;

template <typename T>
void swap(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 10, b = 20;
    float c = 2.5, d = 3.5;
    string s = "dinh", l = "dung";

    // Hoán đổi int
    swap(a, b);
    cout << "a = " << a << ", b = " << b << endl;

    // Hoán đổi float
    swap(c, d);
    cout << "c = " << c << ", d = " << d << endl;

    // Hoán đổi string
    swap(s, l);
    cout << "s = " << s << ", l = " << l << endl;

    return 0;
}
