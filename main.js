var readlineSync = require('readline-sync');
var fs = require('fs');
const { json } = require('node:stream/consumers');
const { Console } = require('console');

let dulieusv = fs.readFileSync('./SV.txt', 'utf-8'); // đọc file txt
let dsSV = JSON.parse(dulieusv);
let flag = true;

// function hiển thị menu
function menu() {
    console.log('CHÀO MỪNG BẠN ĐẾN VỚI CHƯƠNG TRÌNH QUẢN LÝ SINH VIÊN!');
    console.log('==============================================================');
    console.log('MENU');
    console.log('1. HIỂN THỊ TOÀN BỘ SINH VIÊN');
    console.log('2. THÊM MỚI SINH VIÊN');
    console.log('3. XÓA 1 SINH VIÊN THEO ID');
    console.log('4. XÓA NHIỀU SINH VIÊN THEO ID');
    console.log('5. CHỈNH SỬA THÔNG TIN SINH VIÊN');
    console.log('6. TÌM KIẾM SINH VIÊN THEO TÊN');
    console.log('7. TÌM KIẾM SINH VIÊN THỦ KHOA VÀO TRƯỜNG');
    console.log('8. HIỂN THỊ DANH SÁCH SINH VIÊN BỊ CẢNH CÁO');
    console.log('9. SẮP XẾP DANH SÁCH SINH VIÊN THEO BẢNG CHỮ CÁI');
    console.log('10. SẮP XẾP DANH SÁCH SINH VIÊN THEO ĐIỂM TRUNG BÌNH TĂNG DẦN');
    console.log('11. SẮP XẾP DANH SÁCH SINH VIÊN THEO TUỔI TĂNG DẦN');
    console.log('0. THOÁT CHƯƠNG TRÌNH');
    let luachon = readlineSync.question('Chon chuc nang bang cach bam so tuong ung!');
    switch (luachon) {
        case '1':
            hienThiDanhSachSV()
            break;

        case '2':
            themSV()
            break;

        case '3':
            let id = readlineSync.question('Nhap id sinh vien muon xoa: ')
            xoa1SV(id)
            break;
       
        case '4':
            let ids = readlineSync.question('Nhap id nhung sinh vien muon xoa: ')
            xoaNhieuSV(ids)
            break;
       
        case '5':
            let idEdit = readlineSync.question('Nhap id sinh vien muon chinh sua thong tin: ')
            chinhSuaThongTinSV(idEdit)
            break;
       
        case '6':
            let tensv = readlineSync.question('Nhap ten sinh vien muon xem thong tin: ')
            timKiemSV(tensv)
            break;
       
        case '7':
            timThuKhoa()
            break;

        case '8':
            danhSachSVCanhCao()
            break;

        case '9':
            sapXepTenSV()
            break;
       
        case '10':
            sapXepDiemSV()
            break;
       
        case '11':
            sapXepTuoiSV()
            break;
       
        case '0':
            fs.writeFile('./SV.txt', JSON.stringify(dsSV), function (err, data) {
            if (err) {return console.error(err);}})
            return flag = false;
            
    }
}

//1 function hiển thị toàn bộ sinh viên
function hienThiDanhSachSV() {
    for (let index = 0; index < dsSV.length; index++) {
    console.log(dsSV[index]);
  }
}

// 2 Viết function thêm Sv vào cơ sở dữ liệu.
function themSV() {
    let SV = {};
    let idSV = readlineSync.question('Nhap ID cua sinh vien: ');
    SV.idSV = idSV;
    let tenSV = readlineSync.question('Nhap ten cua sinh vien: ');
    SV.tenSV = tenSV;
    let tuoiSv = readlineSync.question('Nhap tuoi cua sinh vien: ');
    SV.tuoiSV = tuoiSv;
    let gioitinhSV = readlineSync.question('Nhap vao gioi tinh cua sinh vien: ');
    SV.gioitinhSV = gioitinhSV;
    let diemVaoTruongSV = readlineSync.question('Nhap vao diem thi dai hoc cua sinh vien: ');
    SV.diemVaoTruongSV = diemVaoTruongSV;
    let diemTBSV = readlineSync.question('Nhap vao diem trung binh cua sinh vien: ');
    SV.diemTBSV = diemTBSV;
    dsSV.push(SV);
}

// 3 function xoa 1 sv
function xoa1SV(id){
    for (let i = 0; i < dsSV.length; i++) {
        if(dsSV[i].idSV == id) {
            dsSV.splice(i,1)};
    }
}

// 4 function xoa nhieu sv
function xoaNhieuSV(ids) {
    for (let i = 0; i < ids.length; i++) {
        const element = ids[i];
        xoa1SV(element);
    }
}

// 5 chinh sua thong tin SV
function chinhSuaThongTinSV(id) {
    for (let i = 0; i < dsSV.length; i++) {
        if(dsSV[i].idSV == id) {
            let tenSV = readlineSync.question('Nhap ten cua sinh vien: ');
            dsSV[i].tenSV = tenSV;
            let tuoiSv = readlineSync.question('Nhap tuoi cua sinh vien: ');
            dsSV[i].tuoiSV = tuoiSv;
            let gioitinhSV = readlineSync.question('Nhap vao gioi tinh cua sinh vien: ');
            dsSV[i].gioitinhSV = gioitinhSV;
            let diemVaoTruongSV = readlineSync.question('Nhap vao diem thi dai hoc cua sinh vien: ');
            dsSV[i].diemVaoTruongSV = diemVaoTruongSV;
            let diemTBSV = readlineSync.question('Nhap vao diem trung binh cua sinh vien: ');
            dsSV[i].diemTBSV = diemTBSV;   };
    }
}

// 6 function tim kiem SV theo ten
function timKiemSV(ten) {
    for (let i = 0; i < dsSV.length; i++) {
        if(dsSV[i].tenSV == ten){
            console.log(dsSV[i]);
        }
    }
}

// 7 function tim kiem SV thu khoa
function timThuKhoa() {
    let diem = 0;
    for (let i = 0; i < dsSV.length; i++) {
        if(dsSV[i].diemVaoTruongSV >= diem){
            diem = dsSV[i].diemVaoTruongSV;
        }}
    for (let j = 0; j < dsSV.length; j++) {
        if(dsSV[j].diemVaoTruongSV === diem){
            console.log(dsSV[j]);
    }
}
}

// 8 function hiển thị sinh viên bị cảnh cáo
function danhSachSVCanhCao() {
    let danhSach = []
    for (let i = 0; i < dsSV.length; i++) {
        if(dsSV[i].diemTBSV < 4){
            danhSach.push(dsSV[i]);
        }}
    console.log(danhSach);
}

// 9 function sap xep danh sach sinh vien theo bang chu cai
function sapXepTenSV() {
    dsSV.sort((a,b) => {
        let aTen = a.tenSV.toUpperCase();
        let bTen = b.tenSV.toUpperCase();
        if (aTen < bTen) {
            return -1
        }
        if (aTen > bTen) {
            return 1
        }
        return 0

    })
    console.log(dsSV);
};

// 10 function sắp xếp Sv theo điểm tăng dần
function sapXepDiemSV() {
    dsSV.sort((a,b) => a.diemTBSV - b.diemTBSV);
    console.log(dsSV);
}

// 11 function sắp xếp Sv theo tuổi tăng dần
function sapXepTuoiSV() {
    dsSV.sort((a,b) => a.tuoiSV - b.tuoiSV);
    console.log(dsSV);    
}

//  fs.writeFile('./SV.txt', JSON.stringify(CSDLSV), function (err, data) {
//     if (err) {return console.error(err);}})
 // ghi dữ liệu vào file txt

 while (flag == true) {
    menu()
 }
