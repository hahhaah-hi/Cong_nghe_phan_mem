#include <iostream>
#include <string>
using namespace std;
class Employee;
class Date{
    private:
int day,month,year;
    public:
Date(int day=1, int month=1, int year=1900);// constructor para
~Date();// destructor
void display();
bool check();
bool Isleapyears();
int Numberdaysofmonth();
};


int Date::Numberdaysofmonth(){
    if ( month ==1 || month ==3 || month ==5 || month ==7 || month ==8 || month ==10 || month ==12){
        return 31;
    }
    else if(month ==4 || month ==6 || month ==9 || month ==11){
        return 30;
    }else {
        if ( (year%4==0 &&year%100!=0)||(year %400==0) ){
            return 29;
        }
        else {
            return 28;
        }
    }
}
Date::Date(int day, int month, int years  ) {
	this->day = day;
	this->month = month;
	this->year = year;
	
	if (!check()) {
        // cout <<this->day<<"/"<<this->month <<"/"<<this->year<<"\t";
		cout << "Invalid date"<< endl;
		// this->day = 1;
		// this->month = 1;
		// this->year = 1900;
	}
}
Date::~Date(){
    cout <<" hàm destructor được  thực hiện"<<endl;
}
void Date:: display (){
    cout <<day<<"/"<<month<<"/"<<year<<endl;
    
}
// void Date::kiemtra(){

//     if( month ==2){ // cách 1
//         if ((year %4==0 && year% 100!=0) || (year %400==0) ){
//             if(day>=1 && day<=29){
//                 cout <<day<<"/"<<month<<"/"<<year<<endl;
//                 cout <<"dữ liệu được nhập hợp lệ"<<endl;
//             }
//             else {
//                 cout <<"dữ liệu không hợp lệ"<<endl;
//             }
//         }
//         else {
//             if (day>=1 && day<=28){
//             cout <<day<<"/"<<month<<"/"<<year;
//             cout <<"dữ liệu được nhập hợp lệ"<<endl;
//             }
//             else {
//                 cout <<"dữ liệu không hợp lệ"<<endl;
//             }
//         }
//     }
//     else if  (month ==1 || month ==3 || month ==5 || month ==7 || month ==8 || month ==10 || month ==12){
//         if (day>=1 && day<=31){
//                 cout <<day<<"/"<<month<<"/"<<year<<endl;
//                 cout <<"dữ liệu được nhập hợp lệ"<<endl;
//             }
//         else {
//             cout <<" dữ liệu không hợp lệ"<<endl;
//         }
//     }
//     else if (month ==4 || month ==6 || month ==9 || month ==11) {
//         if ( day>=1 && day<=30){
//             cout <<day<<"/"<<month<<"/"<<year<<endl;
//             cout <<"dữ liệu được nhập hợp lệ";
//             }
//         else {
//             cout <<" dữ liệu không hợp lệ"<<endl;
//         }
//     }
//     else {
//         cout <<" dữ liệu không hợp lệ"<<endl;
//     }
//     // cách 2
//     // if (year > 0) return false;
// 	// if (month <= 0 && month > 12) return false;
// 	// if (day <= 0 && day > numberofmonth()) return false;
	
// }
bool Date::check() {
	if (this->year >=0) return false ;
	if (this->month >= 1  && this->month <= 12) return false ;
	if (this->day >= 1 && this->day <= Numberdaysofmonth()) return false  ;
	
	return false ;
}
bool Date::Isleapyears() {
	return(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
// bài b
// class Employee{
// private:
//     string firstname, lastname;
//     Date birthday;
//     Date hireday;
// public:
//     Employee(string firstname, string lastname, Date &birthday, Date &hireday);// constructor
//     ~Employee();
//     void print ();
//     friend class Date;
// };
// Employee:: Employee(string firstname, string lastname, Date &birthday, Date &hireday){
//     this->firstname=firstname;
//     this->lastname=lastname;
//     this->birthday=birthday;
//     this->hireday=hireday;
// }
// Employee::~Employee(){
//     cout <<"hàm destructor được thực hiện"<<endl;
// }
// void Employee::print(){
//     // cout <<" first name |"<<"lastname |"<<"birthday \t|"<<"hireday \t|"<<endl;
//     // cout <<this->firstname<<"\t|"<<this->lastname<<"\t|";
//     // this->birthday.display();
//     // cout <<"\t|";
//     // this->hireday.display();
//     // cout <<"\t|";
//     cout <<" first name :";
//     cout <<this->firstname<<endl;
//     cout <<" lastname :";
//     cout <<this->lastname<<endl;
//     cout <<" birthday :";
//     this->birthday.display();
//     cout <<endl;
//     cout <<" hireday :";
//     this->hireday.display();
// }
int main()  
 {  
    // Date birth(24 ,2,  0 );
    Date hire( 12, 3, 1988);
    // Employee manager("Bob", "Blue", birth, hire);
    // cout << endl;
    // manager.print();
    cout << "\nTest Date constructor with invalid values:\n";
    Date lastDayOff(35, 14,  1994); // invalid month and day 
    cout << endl;
    return 0;  
 }  
  