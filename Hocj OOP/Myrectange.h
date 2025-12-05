//interface - Khai bao lop MyRectangle

#pragma once
#include<iostream>
using namespace std;

class MyRectangle
{
//khai bao thuoc tinh / thanh vien du lieu
private:
	float len, wid;
	char* color;
	static int count; //thuoc tinh static, quan ly so doi tuong hien hanh

//khai bao cac phuong thuc / ham thanh vien
public:
	MyRectangle(); //default constructor - ham tao mac dinh
	MyRectangle(float l, float w,char* c); //para constructor - ham tao co tham so
	MyRectangle(const MyRectangle& obj); //copy constructor
	~MyRectangle(); //destructor - ham huy

	//phuong thuc get(): cho phep truy cap gian tiep thuoc tinh
	float getLen();
	float getWid();
	char* getColor();
	static int getCount(); //phuong thuc static

	//phuong thuc set(); cho phep thay doi gia tri cua thuoc tinh
	void setLen(float newLen);
	void setWid(float newWid);
	void setColor(char* newColor);

	float area();
	void input();
	void print();
};


