#include <iostream>
#include <string>
using namespace std;
class sinhvien {
private:
	string id, name, lop;
	float diemtk;
public:
	void input(sinhvien *sv[],int n);
	void ouput(sinhvien *sv[],int n);
    void sort(sinhvien *sv[],int n);
    void timkiem(sinhvien *sv[],int n,string x);
};
// hàm đối tượng nhập .. method
void sinhvien ::input(sinhvien *sv[], int n){
for (int i=0; i<n; i++){
    sv[i]=new sinhvien;// cấp phát bộ nhớ cho mảng con trỏ
    cout <<"----------sinh viên thứ "<< i+1 <<"------ "<<endl;
    cout <<"mời nhập id: ";
    cin>>sv[i]->id;
    cin.ignore();
    cout <<"mời nhập tên: ";
    getline(cin,sv[i]->name);
    cout <<" mời nhập điểm tổng kết: ";
    cin>>sv[i]->diemtk;
    cout <<"mời nhập lớp: ";
    cin>>sv[i]->lop;
}
}
//hàm đối tượng  xuất
void sinhvien::ouput (sinhvien *sv[],int n){
    for (int i=0; i<n;i++){
        cout <<"----------sinh viên thứ "<< i+1 <<"------ "<<endl;
        cout <<"id: "<<sv[i]->id<<endl;
        cout <<"name: "<<sv[i]->name<<endl;
        cout <<"điểm tổng kết: "<<sv[i]->diemtk<<endl;
        cout <<"lớp: "<<sv[i]->lop<<endl;
        
    }
}
void swap (int&a,int &b){
    int temp=a;
    a=b;
    b=temp;
}
//hàm sắp xếpxếp
void sinhvien ::sort(sinhvien *sv[],int n){
    for (int i=0;i<n-1;i++){
        for (int j=i+1;j<n;j++){
            if (sv[i]->diemtk>sv[j]->diemtk){
                swap (sv[i],sv[j]);
            }

            
        }
    }
}
void sinhvien ::timkiem(sinhvien *sv[],int n,string x){
    cout <<" mời nhập id cần tìm kiếm :";
    cin>>x;
    for (int i=0; i<n;i++){
        if (x==sv[i]->id){
        cout <<"id: "<<sv[i]->id<<endl;
        cout <<"name: "<<sv[i]->name<<endl;
        cout <<"điểm tổng kết: "<<sv[i]->diemtk<<endl;
        cout <<"lớp: "<<sv[i]->lop<<endl;
        }
    }
}
int main(){
    int n;
    string d;
    cin>>n;
    sinhvien *sv[n];
    sinhvien x;
    x.input(sv,n);
    cout <<"======danh sách sinh viên========\n";
    x.ouput(sv,n);
    cout <<"------danh sách sinh viên được sắp xếp theo điểm -------\n";
    x.sort(sv,n);
    x.ouput(sv,n);
    cout <<"tìm kiếm sinh viên: ";
    x.timkiem(sv,n,d);

}