#include <iostream>
#include <cstdlib> 
#include <cmath>
#include <iomanip>
using namespace std;
class Rectangle {
    private:
        float len, wid;
    public:
        Rectangle();
        Rectangle(float l, float w);
        void display();
        void setLength(float new_len);
        void setWidth(float new_wid);
        float perimeter();// chu vi
        float diagonal();// đường chéo
        float area();// diện tích
        bool isSquare();
        void  draw(char d );
        ~Rectangle();

    };
Rectangle ::~Rectangle (){
    cout <<" destructor ";
}
Rectangle ::Rectangle (){// defaul constructor
    len=10;
    wid=10;
}
Rectangle ::Rectangle(float l, float w){//parameterized constructor 
    if (l>0&&l<=20&&w>0&&w<=20){
	len = l;
	wid = w;
    }
    else {
    cout <<"Giá trị của Rectangle C không hợp lệ"<<endl;
    len =10;
    wid =10;
    }
}
void Rectangle::display(){
 cout <<wid<<"x" <<len;

}
void Rectangle ::setLength(float new_len){
    len=new_len;
}
void Rectangle ::setWidth(float new_wid){
    wid=new_wid;
}
float Rectangle::perimeter(){ // chu vi
    return (len+wid)*2;
}
float Rectangle ::diagonal(){// đường chéo
    return sqrt((len*len)+(wid*wid));
}
float Rectangle ::area(){// diện  tích  
    return len*wid;
}
bool Rectangle ::isSquare(){
  return len==wid;
}
void  Rectangle ::draw(char d){
      for (int i=0; i<wid;i++){// vòng lặp hình vuông 
        for (int j=0; j<len;j++){
            cout << d<<" " ;
        }
        cout <<endl;
    }
    
}
int main(void)
{
	Rectangle a;
	// test rectangle -- default constructor 
	Rectangle b(12, 20);    // parameterized constructor 
	Rectangle c(-5, 15);    // invalid length 
	cout << "Rectangle A = ";
	a.display();
	cout << endl;
	cout << "Rectangle B = ";
	b.display();
	cout << endl;
	cout << "Rectangle C = ";
	c.display();
	cout << endl << endl;
	int newLen, newWid;// input vars for update 
	cout << "Enter new length and width for rectangle A: ";
	cin >> newWid>> newLen ;
	a.setLength(newLen);
	a.setWidth(newWid);
	cout << "New rectangle A: ";
	a.display();
	cout << endl;
	cout << "Perimeter = " << a.perimeter() << endl;
	cout << "Diagonal =  " << a.diagonal() << endl;
	cout << "Area   =     "<< a.area() << endl; 
		cout << "Rectangle A is ";
	if (!a.isSquare())
		cout << "not ";
	cout << "a square." << endl << endl;
    
	cout << "Rectangle A:" << endl;
	a.draw('*');
	cout << endl;
	return 0;
}