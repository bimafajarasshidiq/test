'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!",res)
};

//Menampilkan Semua Data akun
exports.tampilakun = function (req, res) {
    connection.query('SELECT * FROM tb_login', function(erorr, rows, fileds){
        if(erorr){
            connection.log(erorr);
        }else {
            response.ok(rows, res)
        }
    });
};