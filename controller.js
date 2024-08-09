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


//Menambahkan Data Akun Pegawai
exports.tambahakun = function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query('INSERT INTO tb_login (username,password) VALUES(?,?)',
        [username,password],
        function(erorr,rows,fields){
            if(erorr){
                console.log(erorr);
            }else{
                response.ok("Berhasil di tambahkan!!",res);
            }
            });
        };
    
        //Mengubah Data Akun Pegawai
        exports.ubahakun = function(req,res){
            var id =req.body.id_login;
            var username = req.body.username;
            var password = req.body.password;
        
        connection.query('UPDATE tb_login SET username=?, password=? WHERE id_login=?', 
            [username, password, id],
            function(erorr,rows,fields){
                if (erorr){
                    console.log(erorr);
                }else{
                    response.ok("Berhasil di Ubah!!",res)
                }
            });
        };

        //Menghapus data berdasarkan id login

        exports.hapusberdasarkanid = function(req, res) {
            var id = req.body.id_login;
            connection.query('DELETE FROM tb_login WHERE id_login=?',[id],
                function(erorr, rows, fields) {
                    if(erorr){
                        console.log(erorr);
                    }else{
                        response.ok("Berhasil di Hapus!!!",res)
                    }
                });
            
        };