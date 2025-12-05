
#include <iostream>
#include <string>
using namespace  std;
class concho {
protected:
	string s;
	float kg;
public:
	concho(string _s = "oeoe" ,float _kg = 0) {
        s=_s;
        kg=_kg;
    }
	void setS(string _s) {
		// cin >> _s;
		s=_s;
	}
	void setkg(float _kg) {
		// cin >> _kg;
		kg=_kg  ;
	}
	string gets() {
		return s;
	}
	float getkg() {
		return kg;
	}
};
int main() {
	concho a("gau",2);

	// a.setS("gau gau");
	// a.setkg(3.5);
	cout<<a.gets();
	cout<<a.getkg();
}