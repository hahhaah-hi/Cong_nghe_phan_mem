// #include <iostream>
// #include <string>
// using namespace std;
// class Employee{
//     private:
//         string firstname, lastname;
//         Date birthday;
//         Date hireday;
//     public:
//         Employee(string firstname, string lastname, Date &birthday, Date &hireday);// constructor
//         ~Employee();
//         void print ();
//         friend class Date;
//     };
//     Employee:: Employee(string firstname, string lastname, Date &birthday, Date &hireday){
//         this->firstname=firstname;
//         this->lastname=lastname;
//         this->birthday=birthday;
//         this->hireday=hireday;
//     }
//     Employee::~Employee(){
//         cout <<"hàm destructor được thực hiện"<<endl;
//     }
//     void Employee::print(){
//         cout <<" first name |"<<"lastname |"<<"birthday \t|"<<"hireday \t|"<<endl;
//         cout <<this->firstname<<"\t|"<<this->lastname<<"\t|";
//         this->birthday.display();
//         cout <<"\t|";
//         this->hireday.display();
//         cout <<"\t|";
//         cout <<" first name :";
//         cout <<this->firstname<<endl;
//         cout <<" lastname :";
//         cout <<this->lastname<<endl;
//         cout <<" birthday :";
//         this->birthday.display();
//         cout <<endl;
//         cout <<" hireday :";
//         this->hireday.display();
//     }