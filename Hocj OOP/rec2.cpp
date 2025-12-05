#include <iostream>
#include <cmath>
using namespace std;
class Rectangle {
    private:
        float len, wid;
        static int thisMany;
        string fillString;
    public:
        Rectangle();
        Rectangle(float l, float w,string a);
        void display()const;
        void setLength(float new_len);
        float getlength()const;// get const 
        void setWidth(float new_wid);
        float getwidth()const;// get const 
        float perimeter()const ;// chu vi
        float diagonal();// đường chéo
        float area();// diện tích
        bool isSquare();
        void  draw(char d );
        static int howMany();
        string fill  () const ;
        // hàm destructor;
        ~Rectangle();
};

int Rectangle ::thisMany=0; //static 
int Rectangle ::howMany(){// hàm get
    return thisMany;
}
string Rectangle::fill()const {
    return fillString;
}
Rectangle ::Rectangle (){// defaul constructor// sử dụng con trỏ this
    this->len=10;
    this->wid=10;
    this->fillString="";
    ++thisMany;
}
Rectangle ::Rectangle(float l, float w, string a){//parameterized constructor 
    if (l>0 && l<=20 && w>0 && w<=20 ){
        this->len = l;
        this->wid = w;
        this->fillString=a;
        thisMany++;
        }
        else {
        cout <<"Giá trị của Rectangle C không hợp lệ"<<endl;
        this->len =10;
        this->wid =10;
        fillString=a;
        thisMany++;
        }
}
void Rectangle::display()const { 
 cout <<len<<"x"<<wid;
}
void Rectangle ::setLength(float new_len){
    this->len=new_len;
}
float Rectangle::getlength()const{
    return len;
}
void Rectangle ::setWidth(float new_wid){
    this->wid=new_wid;
}
float Rectangle::getwidth()const{
    return wid;
}
float Rectangle::perimeter()const { // chu vi
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
Rectangle::~Rectangle(){
    --thisMany;
}
int main( void )  
{  
   cout << "Starting # of Rectangles: " << Rectangle::howMany()<<endl; 
   Rectangle a; 
   cout << "Rectangle A = ";  
   a.display();  
   cout  << endl << "Now this many Rectangles: " << a.howMany(); 
   cout << endl << endl;  
   Rectangle b(12, 20, "Rectangle B"); 
   cout << "Rectangle B = ";  
   b.display();  
   cout << endl << "Now this many Rectangles: " << b.howMany(); 
   cout << endl << endl;  
    {  // block to test destructor   
    const Rectangle c(-5, 15, "Rectangle C"); 
        cout << "Rectangle C = ";  
        c.display();  
        cout << endl << "Now this many Rectangles: " << c.howMany();  
        // testing const functions and new fill function  
        cout << endl << "Perimeter of Rectangle C is: " << c.perimeter(); 
        cout << endl << "Fill string of Rectangle C is: " << c.fill(); 
        cout << endl << endl;  
    }  
    //   // should be one less now, since block exited  
    cout << "After exiting block, this many Rectangles: "<< Rectangle::howMany();  
   return 0;  
} 