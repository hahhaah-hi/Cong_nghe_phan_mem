#include <iostream>

using namespace std;

class sinhvien {
private:
    int a;

public:
    // Constructor mặc định
    sinhvien();

    // Constructor có tham số
    sinhvien(int a);

    // Destructor
    ~sinhvien();

    // Nạp chồng toán tử +
    sinhvien operator+(const sinhvien& s);

    // Nạp chồng toán tử xuất <<
    // friend ostream& operator<<(ostream& os, const sinhvien& kq); cách 1 ========================================
    void print();
    // Hàm nhập dữ liệu
    void input();
};
void sinhvien::print(){
    cout <<this->a;// cách dùng con trỏ this thay vì overloadding operator =================================
}
// Định nghĩa constructor mặc định
sinhvien::sinhvien() {
    a = 1;
}

// Định nghĩa constructor có tham số
sinhvien::sinhvien(int a) {
    this->a = a;
}

// Định nghĩa destructor
sinhvien::~sinhvien() {
    // Không cần làm gì vì không cấp phát động
}

// Hàm nhập dữ liệu
void sinhvien::input() {
    cout << "Moi nhap a: ";
    cin >> a;
}

// Định nghĩa toán tử xuất <<
// ostream& operator<<(ostream& os, const sinhvien& kq) { // =============================
//     os << kq.a;
//     return os;  // ✅ Trả về os để có thể xâu chuỗi << <<
// }

// Định nghĩa toán tử cộng +
sinhvien sinhvien::operator+(const sinhvien& kq) {
    return sinhvien(this->a + kq.a);
}

// Hàm main
int main() {
    sinhvien x;
    x.input();
    sinhvien i;
    i.input();
    sinhvien sum= x + i;
    sum.print();
    return 0;
}
