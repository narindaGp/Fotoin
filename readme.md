tes coba

log in 
/ -> nambah user

halaman 

/service nampilin seluruh service tersedia
/service/:id/detail
/user/:id/service -> nampilin semua service yang dibuat user

/user/:id ->profile user untuk halaman nambah service, delete edit
/user/:id/add -> nambah service jadi (half) /+ addService 
/user/:id/delete -> delete service

tambahan 

/signin -> daftar (done)
/login -> masuk (done)
/signout -> keluar 
/user -> daftar user (done)
/user/:id/delete


/user/:id/edit -> edit service
<!-- /service/:id/detail/:userId -->


setup model 

npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,role:string
npx sequelize-cli model:generate --name Service --attributes name:string,description:text,price:integer,imageUrl:string
npx sequelize-cli model:generate --name Detail --attributes status:boolean,requirement:text,availibility:string,timeOfContract:string
npx sequelize-cli model:generate --name Category --attributes name:string
npx sequelize-cli model:generate --name Galery --attributes name:string,alternate:string

npx sequelize-cli migration:create --name add-UserId-to-Services
npx sequelize-cli migration:create --name add-ServiceId-to-Details
npx sequelize-cli migration:create --name add-CategoryId-to-Services
npx sequelize-cli migration:create --name add-DetailId-to-Galeries
