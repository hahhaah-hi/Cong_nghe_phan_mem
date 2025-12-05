    #include <iostream>

    using namespace std;
    class sinhvien{
        private:
    int a;
        public:
    sinhvien();
    sinhvien(int a);
    // ~sinhvien();
    sinhvien operator+( const sinhvien&s );// kiểu member  ;;;; overload toán tử +
    friend sinhvien operator+( int val,const sinhvien&s );// kiểu non member 
    friend ostream&operator<<(ostream&os ,const sinhvien&kq );
    void input();
    };
    sinhvien::sinhvien(){
        a=1;
    }
    sinhvien::sinhvien (int a){
        this->a=a;
    }
    void sinhvien::input(){
        cout <<"mời nhập a: "<<endl;
        cin>>a;
    }
    ostream& operator<<(ostream&os , const sinhvien&kq){
        os<<kq.a ;
        return os;
    }
    sinhvien sinhvien:: operator+(const sinhvien &kq){
        return sinhvien(this->a+kq.a);
    }


    int main(){
        sinhvien x;
        x.input();
        sinhvien i;
        i.input();
        sinhvien sum= x + i;
        cout <<sum;
        return 0;
    }
