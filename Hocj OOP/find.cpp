#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
class student
{
private:
	string id, name, group;
public:
	student(string _id = " ", string _name = " ", string _group = " ") : id(_id), name(_name), group(_group) {};

	friend ostream& operator<<(ostream& out, const student& s)
	{
		out << s.id << "|" << s.name << "|" << s.group << "|";
		return out;
	}
	friend istream& operator>>(istream& in, student& s) 
	{
		in >> s.id;
		in.ignore();
		getline(in, s.name);
		in>> s.group;
		return in;
	}
	friend bool operator<(student&a,student& b) 
	{
		return (a.name < b.name);
	}
	friend bool operator>(student& a, student& b)
	{
		return (a.name > b.name);   
	}
	friend bool operator==(const student &a, const student& b) 
    {
        return (a.getID() == b.getID());
    }
	string getID()const
	{
		return id;
	}
	string getName()const
	{
		return name;
	}
	string getGroup()const
	{
		return group;
	}
	void set_ID(string _id) {
		id = _id;
	}
	void set_Name(string _name) {
		name=_name;
	}
	void set_Gr(string _group) {
		group=_group;
	}
};


int main (){
    
	vector<student>v;
	int n;
	cout << " nhap so sinh vien:";
	cin >> n;
	student s;
	cout << "-------danh sach sinh vien-------" << endl;
	for (int i = 0;i < n;i++) {
		cout << "sv" << i + 1 << ":";
		cin >> s;
		v.push_back(s);
	}
	cout << "ID|" << "Name|" << "Group|" << endl;
	for (int i = 0;i < n;i++) {
		cout << v[i] << endl;
	}
	cout << endl;
	//  //sap xep sinh vien theo kieu tang dan
	cout << "sap xep theo kieu tang dan" << endl;
	sort(v.begin(), v.end());
	cout << "ID|" << "Name|" << "Group|" << endl;
	for (int i = 0;i < n;i++) {
		cout << v[i] << endl;
	}
	cout << endl;
	// //sap xep theo kieu giam dan
	cout << "sap xep theo kieu giam dan" << endl;
	sort(v.rbegin(), v.rend());
	cout << "ID|" << "Name|" << "Group|" << endl;
	for (int i = 0;i < n;i++) {
		cout << v[i] << endl;
	}
	cout << endl;
	// hien thi danh sach lop can tim
	string gr;
	cout << "nhap danh sach lop can tim :";
	cin >> gr;
	for (int i = 0; i < n;i++) {
		if (gr == v[i].getGroup()) {
			cout << "ID|" << "Name|" << "Group|" << endl;
			cout << v[i] << endl;
		}
		else
			cout << " khong co lop nay!!!" << endl;
	}
	cout << endl;
	string d;
	cout << " nhap id can tim:";
	cin.ignore();
	cin >> d;
	student s1;
	s1.set_ID(d);
	vector<student>::iterator it;
	it = find(v.begin(), v.end(),s1);
	if (it != v.end()) {
		cout << "sinh vien " << *it << endl;
	}
	else {
		cout << " khong tim thay sinh vien..." << endl;
	}
	return 0;
}