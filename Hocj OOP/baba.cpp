#include <iostream>
#include <string>
#include <sstream>
using namespace std;
class sinhvien{
    private:
string id, name , ns;
float gpa;
static int dem;
    public:
void nhap();
void in();
friend void chuanhoa(sinhvien &a);

};
void sinhvien::nhap(){
    getline(cin,name);
}
void sinhvien ::in(){
    cout <<name;
}
void chuanhoa(sinhvien&a){// hàm chuẩn hóa tên( in hoa chữ cái đầu ).
    string  res="";
    stringstream ss(a.name);
    string token;
    while(ss>>token){
        res+=toupper(token[0]);
        for (int i=1;i<token.size();i++){
            res+=tolower(token[i]);
        }
        res+=" ";

    }
res.pop_back(); // erese() xóa kí tự cuối  cũng có thể dùng pop_back để làm tương tựtự
a.name=res;
}
int main (){
    sinhvien x;
x.nhap();
chuanhoa(x);
cout <<endl;
x.in();
}
