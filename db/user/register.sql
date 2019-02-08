insert into helo_users (username, password, profile_pic)
values(${username}, ${password}, ${profile_pic})
returning username, profile_pic, user_id;