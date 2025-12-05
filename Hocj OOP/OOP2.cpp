#include <iostream>
#include <string>
using namespace std;
class sinhvien{
private:
string name;
int age;
float gpa;

public:
// ecapsulation - đóng gói
sinhvien(){
    age=1;
}
void setname(string n){
    name =n;
}
string  getname(){
    return name;
}
void setage(int a){
    age =a;
}
int getage(){
    return age;
}
void setgpa(float g){
    gpa =g;
}
float getgpa(){
    return gpa;
}

void in(){
    cout <<name<<" "<<age<<" " <<gpa;
}
// string name;
// int age;
// float gpa;
};

int main(){
sinhvien x;
x.setname("vũ đình dũng");
x.getname();
x.setage(19);
x.getage();
x.setgpa(10);
x.getage();
x.in();
return(0);
}
