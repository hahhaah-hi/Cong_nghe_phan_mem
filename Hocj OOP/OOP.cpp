#include <iostream>
#include <string>

using namespace std;
class sinhvien{
    private:
    string id;
    string name;
    static int dem;//quản lí số đối tượng hiện hành và được sử dụng chung cho cả  class , khai báo 1 lần duy nhất 
    public:
    sinhvien(string , string);
    void nhap();
    void in();
    int getdem();
    

};
int sinhvien::dem=0;// khởi tạo giá trị static( biến tĩnh)
static int ::getdem(){

}
sinhvien::sinhvien(string a, string b ) { //cách nhập bằng constructor

    this->id=a ;
    this->name=b ;
    ++dem;
this->id = "SV" + string (3-to_string(dem).length(),'0') + to_string(dem);
}

int sinhvien::getdem(){
    return dem;
} 
// mã sinh từ 001>>
void sinhvien::nhap(){
// ++dem;
// this->id = "SV" + string (3-to_string(dem).length(),'0') + to_string(dem);//chèn số 0 để cho kh quá 1000 và nhỏ hơn 000
cout <<"nhập tên "; //cách nhập bằng phím
getline(cin,name);
}
void sinhvien::in(){
    cout <<this->id<<" "<<this->name<<endl;
}
int main (){
    // sinhvien x(" ","vũ đình dũng");// cách nhập bằng constructor
    // sinhvien y(" ","lee nhật hòa");
// sinhvien x;
sinhvien *x=new sinhvien(" "," ");
sinhvien *y=new sinhvien(" "," ");
sinhvien d();
sinhvien l();
x->nhap();
x->in();

}