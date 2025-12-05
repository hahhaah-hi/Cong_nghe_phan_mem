#include <iostream>
#include <string>

using namespace std;
class sinhvien {
    private:
string id;
float diemkt1,diemkt2;
    public:
void nhap();
void in();
};
void sinhvien::nhap(){
    cout <<" mời nhập id: ";
    cin>>id;
    cin.ignore();
    cout <<" mời nhập điểm kiểm tra 2 môn: ";
    cin>>diemkt1>>diemkt2;
}
void sinhvien::in(){
    cout <<id<<diemkt1<<diemkt2;
}
class thechat :public sinhvien
{
    private:
    float diemtc;
    public:
    void nhapdiemtc();

};
void thechat::nhapdiemtc(){
    cout <<" mời nhập diểm thể chất: ";
    cin>>diemtc;
}

int main(){
    thechat a;
    a.nhap();
    a.nhapdiemtc();
    a.in();
}