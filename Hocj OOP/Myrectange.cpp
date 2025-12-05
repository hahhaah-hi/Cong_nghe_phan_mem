//implementation - Cai dat lop MyRectangle
#include "MyRectangle.h"
#include<cstring>

int MyRectangle::count = 0; //khoi tao gia tri cho thuoc tinh static

MyRectangle::MyRectangle() //default constructor - ham tao mac dinh
{
	cout << "Contructor is called" << endl;
	len = 1;
	wid = 1;
	color = new char[11];
	strcpy_s(color,11,"white"); //sao chep chuoi
	count++;
}

MyRectangle::MyRectangle(float l, float w, char* c) //para constructor - ham tao co tham so
{
	cout << "Contructor is called" << endl;
	len = l;
	wid = w;
	color = new char[strlen(c)+1]; //cap phat bo nho
	strcpy_s(color, strlen(c) + 1, c);
	count++;
}

MyRectangle::MyRectangle(const MyRectangle& obj)
{
	cout << "Contructor is called" << endl;
	len = obj.len;
	wid = obj.wid;
	color = new char[strlen(obj.color) + 1];
	strcpy_s(color, strlen(obj.color) + 1, obj.color);
	count++;
}

MyRectangle::~MyRectangle()
{
	cout << "Destructor is called" << endl;
	if (color != NULL)
		delete[]color; // giai phong vung nho
	count--;
}

float MyRectangle::getLen()
{
	return len;
}

float MyRectangle::getWid()
{
	return wid;
}

char* MyRectangle::getColor()
{
	cout << count;
	return color;
}

int MyRectangle::getCount()
{
	return count;
}

void MyRectangle::setLen(float newLen)
{
	if (newLen > 0 && newLen > wid)
		len = newLen;
	else
		cout << "Gia tri khong hop le" << endl;
}
void MyRectangle::setWid(float newWid)
{
	if (newWid > 0 && newWid < len)
		wid = newWid;
	else
		cout << "Gia tri khong hop le" << endl;
}
void MyRectangle::setColor(char* newColor)
{
	color = new char[strlen(newColor) + 1]; //cap phat bo nho
	strcpy_s(color, strlen(newColor) + 1, newColor);
}


float MyRectangle::area()
{
	return len * wid;
}
void MyRectangle::input()
{
	do {
		cout << "Nhap chieu dai va chieu rong: ";
		cin >> len >> wid;
	} while (len <= 0 || wid <= 0 || len < wid);

	MyRectangle r1;
	r1.len = 2;

}
void MyRectangle::print()
{
	cout << "Kich thuoc cua hcn: " << len << "x" << wid << endl;
	cout << "Mau: " << color << endl;
}