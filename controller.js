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
            console.log(erorr);
        }else {
            response.ok(rows, res)
        }
    });
};

//Menampilkan Semua Data Akun berdasarkan id
exports.akunberdasarkanid = function(req,res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tb_login WHERE id_login = ?', [id],
        function(erorr,rows, fields){
            if(erorr){
                console.log(erorr);
            }else{
                response.ok(rows, res);
            }
        });
    
};