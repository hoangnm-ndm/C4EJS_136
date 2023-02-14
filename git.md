1. install git:
   https://git-scm.com/download/win
   https://git-scm.com/download/mac

   Install xong kiểm tra đã cài đặt thành công bằng cách mở terminal và gõ lệnh:
   git -v

2. đăng ký tài khoản tại
   https://github.com/
3. Config git https:
   Mở terminal và gõ:
   git config --global user.name <username>
   git config --global user.email <mailaddress>

   ex: git config --global user.name hoangnm.fpt
   Config xong kiểm tra lại đã thành công chưa bằng lệnh:
   git config --list
   hoặc:
   git config user.name
   git config user.email

4. Cấu hình SSH Key - mục đích để sử dụng phương thức xác thực SSH thay vì HTTPS và có thể sử dụng cho nhiều lần sau mà không cần nhập lại mật khẩu trên máy tính cá nhân.

SSH Key có vai trò như một chìa khoá để remote máy tính cá nhân với tài khoản github của bạn

- Mở terminal
- Paste: kiểm tra xem máy của bạn đã có ssh key chưa bằng cách:
  cd ~/.ssh
  ls
  Nếu tồn tại id_dsa và id_dsa.pub thì bạn đã có ssh key.
  Nếu chưa có, bạn tạo ssh key mới bằng lệnh:
  ssh-keygen -o
  Sau đó có thể vào thư mục .ssh/id_dsa.pub để lấy mã hoặc dùng lệnh:
  cat ~/.ssh/id_rsa.pub
  Copy đoạn mã hiển thị ra và paste vào kho cấu hình ssh-key của máy chủ git (trong tài khoản github hoặc gitlab của bạn.)

5. Những câu lệnh git cơ bản:
   Đứng tại thư mục gốc của dự án, mở terminal và thực hành một số lệnh cơ bản:
   git init
   git add .
   git commit -m "new message"
   git push
   git branch -M main
   git status
   git log
6. Mô hình git và các khái niệm:
   Work Spacing area Staging area Commited
