<div align="center">

# Movie Library API
  
<img src="https://user-images.githubusercontent.com/62621800/136698669-86ac357c-167b-4665-bc4f-3b6c171a83d4.jpg"  width="300" />  
  
</div>


## Purpose  

API for the first project of Front-end module on trybe, but now using my fullstack skills, its part of a personal project called Trybe new game +.

## what was worked

- Creation endpoints GET, POST, PUT and DELETE
- Creation of CRUD API with REST archtecture
- Generation of tokens with JWT
- Management of tokens
- Upload of files and storage with Multer
- Receive data from MongoDB cluster
- API Deployment
- File management with AWS S3 bucket service

## How it works

### Resume

it search, catalog, delete and update movies, some of that actions needs a token, this token that is provided before login.

### Routes

#### User routes:
- **/users/:email** - returns username, email and hash md5 from email
- **/users/login** - validate email and password then returns token that expires in 24 hours;
- **/users/create** - creates account;
- **/users/validate/:token** - returns if token still valid;

#### Movie routes:
**_don't needS token: ๐ท_**

**_needs token: ๐ถ_**
- **/movies** - returns every movie from database ๐ท
- **/movies/:id** - returns filtered movie by id ๐ท
- **/movies/create** - creates a new movie ๐ถ
- **/movies/delete/:id** - deletes movie that has id equal that param ๐ถ
- **/movies/update/:id** - update movie that has id equal that param ๐ถ
- **/movies/img/:filename** - returns movie cover that has filename equal that param ๐ท


<div align="center">
  
## Aplication
  
# [๐](https://movie-library-api.herokuapp.com/users/alan.alb.flopes@gmail.com)


<br/><br/><br/><br/>  
  
#### [Click here to see the front-end application](https://github.com/offpepe/movie-library)
  
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  
maded with ๐๐๐๐ค๐งก
                    
</div>
  
