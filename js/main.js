var loaiXe = '';
var soKm = 0;
var thoiGianCho = 0;
var soTien = 0;
var loaiXe = 'GrabX';
GrabX.onclick = function() {
    loaiXe = document.getElementById('GrabX').id;
    console.log(loaiXe);
}
GrabSUV.onclick = function() {
    loaiXe = document.getElementById('GrabSUV').id;
    console.log(loaiXe);
}
GrabBlack.onclick = function() {
    loaiXe = document.getElementById('GrabBlack').id;
    console.log(loaiXe);
}

function tinhTienS() {
    var tongThanhToan = 0;
    var soLanCho = 0;
    var tienCho = 0;
    soKm = +document.getElementById('soKM').value;
    thoiGianCho = +document.getElementById('thoiGianCho').value;
    switch (loaiXe) {
        case 'GrabX':
            {
                if (soKm <= 1) {
                    tongTien = 8000;
                } else if (soKm > 1 && soKm <= 19) {
                    tongTien = 7500 * soKm;
                } else {
                    tongTien = 7000 * soKm;
                }
                if (thoiGianCho >= 3) {
                    soLanCho = (thoiGianCho / 3).toFixed(3);
                    tienCho = 2000 * soLanCho;
                } else {
                    tienCho = 2000;
                }
                tongThanhToan = tongTien + tienCho;
                // tinhTong = tinhTongTien(8000, 7500, 7000, 2000);
            }
            break;
        case 'GrabSUV':
            {
                if (soKm <= 1) {
                    tongTien = 9000;
                } else if (soKm > 1 && soKm <= 19) {
                    tongTien = 8500 * soKm;
                } else {
                    tongTien = 8000 * soKm;
                }
                if (thoiGianCho >= 3) {
                    soLanCho = (thoiGianCho / 3).toFixed(3);
                    tienCho = 2000 * soLanCho;
                } else {
                    tienCho = 2000;
                }
                tongThanhToan = tongTien + tienCho;
            }
            break;
        case 'GrabBlack':
            {
                if (soKm <= 1) {
                    tongTien = 10000;
                } else if (soKm > 1 && soKm <= 19) {
                    tongTien = 9500 * soKm;
                } else {
                    tongTien = 9000 * soKm;
                }
                if (thoiGianCho >= 3) {
                    soLanCho = (thoiGianCho / 3).toFixed(3);
                    tienCho = 2000 * soLanCho;
                } else {
                    tienCho = 2000;
                }
                tongThanhToan = tongTien + tienCho;
            }
        default:
            {
                tongThanhToan = 'chọn loại xe'
            }

    }
    console.log(tongThanhToan);
    document.getElementById('divThanhTien').style.display = 'block';
    document.getElementById('xuatTien').innerHTML = tongThanhToan;
    document.getElementById('td-loaixe').innerHTML = loaiXe;
    document.getElementById('td-soKm').innerHTML = soKm;
    document.getElementById('td-thoiGianCho').innerHTML = thoiGianCho;
    document.getElementById('td-tongTien').innerHTML = tongThanhToan;
}

tinhTien.onclick = function() {
    tinhTienS()
}

inHoaDon.onclick = function() {
    document.getElementById('dmeGrap').style.display = 'none';
    document.getElementById('prinDiv').style.display = 'block';
    window.print();
    document.getElementById('dmeGrap').style.display = 'flex';
    document.getElementById('prinDiv').style.display = 'none';
}

// function tinhTongTien(tien1KM, tien19KM, tien20KM, tienCho) {
//     if (soKm <= 1) {
//         tongTien = tien1KM;
//     } else if (soKm > 1 && soKm <= 19) {
//         tongTien = tien19KM * soKm;
//     } else {
//         tongTien = tien20KM * soKm;
//     }
//     if (thoiGianCho >= 3) {
//         soLanCho = (thoiGianCho / 3).toFixed(3);
//         tienCho = tienCho * soLanCho;
//     } else {
//         tienCho = tienCho;
//     }
//     tongThanhToan = tongTien + tienCho;
//     return tongThanhToan;
// }