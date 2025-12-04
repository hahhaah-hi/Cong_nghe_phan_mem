#include <iostream>
#include <string>
#include <algorithm>
#include <string.h>
using namespace std;
class sach{
private:
string tensach,namXB,gia;
public:
void nhap(sach *a[],int n);
void in(sach* a[],int n);
void sort(sach *a[],int n);
void timkiem(sach*a[], int n, string );

};
void sach::nhap(sach *a[],int n){
   for (int i=0; i<n ; i++){
        a[i]  = new sach;
   cout <<" quyển "<<i+1;
   cin.ignore();
   cout <<"mời nhập tên sách: ";
   getline(cin,a[i]->tensach);
   cout <<"mời nhập năm xuất bản: ";
   cin >>a[i]->namXB;
   cout <<"mời nhập giá : ";
   cin>>a[i]->gia;
   }
}
void sach::in(sach *a[],int n){
   for (int i=0; i<n ; i++){
   cout<<"------------------------------------------"<<endl;
   cout <<"STT|"<<"tên sách|"<<"năm xuất bản \t|"<<"giá\t|"<<endl;
   cout <<i+1<<"\t|"<<a[i]->tensach<<"\t|"<<a[i]->namXB<<"\t|"<<a[i]->gia<<"\t|"<<endl;
  }
   cout<<"------------------------------------------"<<endl;
}
void swap(int&a, int &b){
   int temp=a;
   a=b;
   b=temp;
}
void sach::sort(sach *a[],int n){
   for (int i=0; i<n-1; i++)
   for (int j=i+1; j<n;j++){
     if ( a[i]->tensach.compare(a[i+1]->tensach)>0){// compare(): so sánh 
       swap(a[i], a[i+1]);
     }
}
}

void sach::timkiem(sach *a[], int n,string d ){   
   cin.ignore();
    getline(cin, d);
   for ( int i=0; i<n; i++){
       if (a[i]->tensach.find(d)==0){// Hàm find() giúp bạn tìm kiếm sự xuất hiện của xâu con trong xâu hiện tại.
           //trả về chỉ số (index) của lần xuất hiện đầu tiên của chuỗi con này. Nếu không tìm thấy, nó sẽ trả về giá trị đặc biệt là string::npos.
           cout<<"------------------------------------------"<<endl;
           cout <<"STT|"<<"tên sách|"<<"năm xuất bản \t|"<<"giá\t|"<<endl;
           cout <<i+1<<"\t|"<<a[i]->tensach<<"\t|"<<a[i]->namXB<<"\t|"<<a[i]->gia<<"\t|"<<endl;
          }
   }
   cout <<" không có quyển sách nào tên này"<<endl;
   cout<<"------------------------------------------"<<endl;
        
   }   
       

int main (){
int n;
string d;
cout << " -------mời nhấp số sách ";
cin >>n;
sach *a[n];
sach x;
cout <<"---------- nhập danh sách sách:"<<endl;
x.nhap(a,n);
cout <<" --------------danh sách sách đuọc bán là------------ :"<<endl;
x.in(a,n);
cout <<"--------------- sắp xếp theo tên sách----------------------------"<<endl;
x.sort(a,n);
x.in(a,n);
cout <<" --------mời nhập tên sách cần tìm kiếm :";
x.timkiem(a,n,d);
}
