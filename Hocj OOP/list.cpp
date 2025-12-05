#include <iostream>
#include <vector>
#include <algorithm>
#include<functional>
using namespace std;
class songuyen{
protected:
int a;
public: 
songuyen(int a=0){}
friend istream& operator>>(istream& in, songuyen&s){
    in >>s.a;
    return in;
} 
friend ostream&operator<<(ostream&out, const songuyen&s){
    out<<s.a<<endl;
    return out;
}
friend bool operator <(songuyen&d,songuyen&b){
    return (d.a<b.a);
}
friend bool operator >(songuyen&d,songuyen&b){
    return (d.a>b.a);
}
friend bool operator==(songuyen&d,songuyen&b){
    return (d.a==b.a);
}

};
int main(){
    vector<songuyen>v;
    songuyen d;
    int n;
    cin>>n;
    for (int i=0;i<n;i++){
        cin>>d;
        v.push_back(d);
    }
     for (int i=0;i<n;i++){
        cout <<v[i];
    }
    sort (v.begin(),v.end());

cout <<"sap xep"<<endl;
    for (int i=0;i<n;i++){
        cout <<v[i];
    }
    sort (v.rbegin(),v.rend());
cout <<"sắp xếp từ lớn đến nhỏ"<<endl;
    for ( int i=0; i<n; i++){
        cout <<v[i];
    }

}