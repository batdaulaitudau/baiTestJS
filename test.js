var readlineSync = require('readline-sync');
arr = [1, 7, 9, 3, 10, 15, 1, 6, 4]
//arr.sort((a,b)=>a-b) // tăng dần
//arr.sort((a,b)=>b-a) // giảm dần


// const stringArray = ['Blue', 'Humpback', 'Beluga'];
// const numberArray = [40, 1, 5, 200];
// const numericStringArray = ['80', '9', '700'];
// const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// console.log(mixedNumericArray.sort((a,b) => a-b));
// console.log(mixedNumericArray.sort());
let flag = true;

let dsSV = [
    {
      idSV: '4',
      tenSV: 'Trang',
      tuoiSV: '16',
      gioitinhSV: 'Nu',
      diemVaoTruongSV: '28',
      diemTBSV: '9'
    },
    {
      idSV: '1',
      tenSV: 'Manh',
      tuoiSV: '18',
      gioitinhSV: 'Nam',
      diemVaoTruongSV: '18',
      diemTBSV: '6'
    },
    {
      idSV: '2',
      tenSV: 'Bang',
      tuoiSV: '18',
      diemVaoTruongSV: '19',
      diemTBSV: '4'
    },
    {
      idSV: '3',
      tenSV: 'ngoc',
      tuoiSV: '19',
      gioitinhSV: 'Nam',
      diemVaoTruongSV: '19',
      diemTBSV: '7'
    }
  ]


  
function xoa1SV(id){
    for (let i = 0; i < dsSV.length; i++) {
        if(dsSV[i].idSV == id) {
            dsSV.splice(i,1)};
    }
}

function xoaNhieuSV(ids) {
    for (let i = 0; i < ids.length; i++) {
        const element = ids[i];
        xoa1SV(element);
    }
}

function mai() {
    
let luachon = readlineSync.question('chon chuc nang bang cach bam so tuong ung!');
switch (luachon) {
    case '1' :
        console.log(1);
        break;
    case ('2'):
        console.log(2);
        break;
        case '3':
            let id = readlineSync.question('Nhap id sinh vien muon xoa: ')
            xoa1SV(id)
            break;
       
        case '4':
            let ids = readlineSync.question('Nhap id những sinh vien muon xoa: ')
            xoaNhieuSV(ids)
            break;
    case('0'):
        flag = false;
        return flag;
}
}
while (flag == true) {
    mai()
    console.log(dsSV);
}
