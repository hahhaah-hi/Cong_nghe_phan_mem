//Su dung lop
#include "MyRectangle.h"

int main()
{
	// kêu gọi static  static dùng chung cho cả class.
	cout << "so doi tuong hien hanh: " << MyRectangle::getCount() << endl;

	//tao doi tuong r1 su dung ham tao mac dinh
	MyRectangle r1;
	cout << "so doi tuong hien hanh: " << MyRectangle::getCount() << endl;
	cout << "so doi tuong hien hanh: " << r1.getCount() << endl;

	//r1.input();//message de nhap du lieu cho r1
	r1.print();
	cout<<"Chieu dai cua r1: "<<r1.getLen()<<endl;
	//r1.len = 2;
	r1.setLen(-2);
	cout << "Chieu dai cua r1: " << r1.getLen() << endl;

	//tao con tro doi tuong r2 su dung ham tao mac dinh
	MyRectangle* r2 = new MyRectangle(); //r2 tro den doi tuong cua lop
	r2->print();

	//tao doi tuong r3 su dung ham tao co tham so
	MyRectangle r3(5, 3,(char*)"red");
	r3.print();

	//tao con tro doi tuong r4 su dung ham tao co tham so
	MyRectangle* r4 = new MyRectangle(6, 4,(char*)"blue");
	r4->print();

	//tao doi tuong r5 su dung ham tao copy
	MyRectangle r5(r3);
	cout << "so doi tuong hien hanh: " << r5.getCount() << endl;
	cout << "so doi tuong hien hanh: " << r1.getCount() << endl;

	r5.print();

	delete r2; // goi den ham huy
	delete r4;
	return 0;
}