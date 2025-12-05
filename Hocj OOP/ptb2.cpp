#include <iostream>
#include <cmath>
using namespace std;
void test(){
    int a,b,c;
    float x1,x2;
    cin>>a>>b>>c;
    float delta;
    delta=(b*b)-(4*a*c);
    if (delta>0)
    {
         x1=(-b+sqrt(delta))/(2*a);
        x2=(-b-sqrt(delta))/(2*a);
        cout<<x1<<" "<<x2;
    }
}
int main(){
    // int a,b,c;
    // float x1,x2;
    // cin>>a>>b>>c;
    // float delta;
    // delta=(b*b)-(4*a*c);
    // if (delta>0)
    // {
         
    // }
  test();
}