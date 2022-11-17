#include <iostream>
#include <string>
using namespace std;
/*
déclarations
*/
char table[4][4] = {
    {' ','1','2','3'},
    {'A',' ',' ',' '},
    {'B',' ',' ',' '},
    {'C',' ',' ',' '},
};
int a{0},b{0},test{0},l{1},x,y,r{0},i{0};
/*
fonction de tests pour gagner
rdstdyutrsijteqtu
marche paaaaaas

int horiz(int x,int y){
    while (l < 2){
        if ((table[x][y]=table[x+1][y])&&(table[x][y]!=' ')){
            x++;r++;
        }
        l++;
    }
    return r;
}
int verti (int x,int y){
    while (l < 2){
        if ((table[x][y]=table[x][y+1])&&(table[x][y]!=' ')){
            y++;r++;
        }
        l++;
    }
    return r;
}
int diagLR (int x,int y){
    while (l < 2){
        if ((table[x][y]=table[x+1][y+1])&&(table[x][y]!=' ')){
            x++;y++;r++;
        }
        l++;
    }
    return r;
}
int diagRL (int x,int y){
    while (l < 2){
        if ((table[x][y]=table[x+1][y-1])&&(table[x][y]!=' ')){
            x++;y=y-1;r++;
        }
        l++;
    }
    return r;
}
void testwin (){
    test = 0;
    for (a=1; a<3; a++) {           //lignes
        for (b=1; b<3; b++) {       //colones
            horiz (a,b);
            verti (a,b);
            diagLR(a,b);
            diagRL(a,b);
            if (table[a][b] == ' '){
                test++;
            }
            if (r>2){
                cout<<r<<table[x][y]<<" a gagne"<<endl;
                i=9;
            }
            cout<<r<<endl;
        }
    }
    if (test == 9){
        cout <<r<< "c\'est une egalitee"<<endl;
        i=9;
    }
}
*/
/*methode bourrin*/
void testwin(){
    if ((table[1][1]==table[1][2])&&(table[1][2]==table[1][3])&&(table[1][1]!=' ')){cout<<table[1][1]<<" a gagne"<<endl;i=9;}
    if ((table[2][1]==table[2][2])&&(table[2][2]==table[2][3])&&(table[2][1]!=' ')){cout<<table[2][1]<<" a gagne"<<endl;i=9;}
    if ((table[3][1]==table[3][2])&&(table[3][2]==table[3][3])&&(table[3][1]!=' ')){cout<<table[3][1]<<" a gagne"<<endl;i=9;}

    if ((table[1][1]==table[2][1])&&(table[2][1]==table[3][1])&&(table[1][1]!=' ')){cout<<table[1][1]<<" a gagne"<<endl;i=9;}
    if ((table[1][2]==table[2][2])&&(table[2][2]==table[3][2])&&(table[1][2]!=' ')){cout<<table[1][2]<<" a gagne"<<endl;i=9;}
    if ((table[1][3]==table[2][3])&&(table[2][3]==table[3][3])&&(table[1][3]!=' ')){cout<<table[1][3]<<" a gagne"<<endl;i=9;}

    if ((table[1][1]==table[2][2])&&(table[2][2]==table[3][3])&&(table[1][1]!=' ')){cout<<table[1][1]<<" a gagne"<<endl;i=9;}
    if ((table[1][3]==table[2][2])&&(table[2][2]==table[3][1])&&(table[1][3]!=' ')){cout<<table[1][3]<<" a gagne"<<endl;i=9;}
    if ((table[1][1]!=' ')&&(table[1][2]!=' ')&&(table[1][3]!=' ')&&(table[2][1]!=' ')&&(table[2][2]!=' ')&&(table[2][3]!=' ')&&(table[3][1]!=' ')&&(table[3][2]!=' ')&&(table[3][3]!=' '))
        {cout<<"egalite"<<endl;}
}

/*
fonction d'impréssion
*/
void prtable(){
    for (a=0; a<4; a++) {           //lignes
        for (b=0; b<4; b++) {       //colones
            cout <<table[a][b]<<"|";
        }
        cout <<endl;
    }
}
/*
déclarations de l'input
programme principal
*/
char cas[2],player;
int main(){
    prtable();
    while (i<9) {
        cout<<"joueur "<<int(i%2)+1<<" selectionnez une case "<<endl;
        cin>>cas;
        if (i%2==0){player='X';}else{player='O';}
        if ((cas[0]=='A' || cas[0] == 'a')&&table[1][cas[1]-'0'] ==' '){    //parcours de "a"
            table[1][cas[1]-'0']=player;
            i++;
        }
        if ((cas[0]=='B' || cas[0] == 'b')&&table[2][cas[1]-'0'] ==' '){    //parcours de "b"
            table[2][cas[1]-'0']=player;
            i++;
        }
        if ((cas[0]=='C' || cas[0] == 'c')&&table[3][cas[1]-'0'] ==' '){    //parcours de "c"
            table[3][cas[1]-'0']=player;
            i++;
        }
        prtable();testwin();
    }
}
