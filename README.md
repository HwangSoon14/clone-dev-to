/api/v1

---auth
/login đăng nhập 
/register đăng ký tài khoản
/forgotpassword gửi mật khẩu về mail
---user 

GET 
user/:userName lấy thông tin của user
user/:id/posts lấy tất cả bài viết của user
user/posts/saved

PUT 
user/ sửa thông tin user 
user/posts/:id sửa bài viết 

POST
user/posts thêm mới bài viết 
user/posts/save thêm mới bài viết 

DELETE
user/posts/:id xóa bài viết
user/posts/unsave thêm mới bài viết 


---post

GET
post/:id
post/tags thống kê tags của bài viết
post/all lấy thông tin của tất cả post 
post/:slug lấy thông tin của post theo slug 
post/:id/comment lấy comment của post id


POST:
post/:id/like thích bài viết 
post/:id/unlike bỏ thích bài viết 
post/:id/comment thêm mới comment

PUT
post/comment/:id sửa nội dung comment

DELETE: 
post/comment/:id xóa bài viết

