#include <iostream>
using namespace std;
class sinhvien {
public:
virtual void makesound(){
    cout <<"sinh viên nói"<<endl;
}
};
class sound:public sinhvien{
public:
void makesound(){
    cout <<" sinh viên phát biểu "<<endl;
}
};
class makeanoise:public sinhvien {
 public:
 void makesound(){
    cout<<" sinh vien nói chuyện"<<endl;
 }
};
int main (){
sinhvien  *a;
sound s;
makeanoise m;
// chú ý : phải có phương thức virtual(hàm ảo) ở lớp cha nếu không thì chương trình sẽ luôn gọi lớp cha mà không gọi lớp con
a=&s;// gán địa chỉ của đối tượng s cho con trỏ a( con trỏ của lớp cha) là con trỏ của lớp cha đang trỏ tới đối tượng sound ( lớp con) 
a->makesound(); // gọi phương thức của sound thông qua con trỏ a (lớp cha)

a=&m;// samee
a->makesound();
}