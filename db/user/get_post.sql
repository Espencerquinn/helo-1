select u.username, u.profile_pic, p.title, p.image_url, p.content
from helo_posts p
join helo_users u on p.user_id = u.user_id
where p.id = $1;