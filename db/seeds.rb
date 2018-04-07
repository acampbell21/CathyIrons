user = User.new(
  :name                  => "A bathing Alex",
  :email                 => "admin@test.com",
  :about                 => "this is the about",
  :notes                 => "these are my notes",
  :password              => "password",
  :password_confirmation => "password",
  :image                 => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWyR8VLP1_P5oV9DBEzUub5c4B9M866xOS12Rk8JQfSYFqO2X"
)
user.save!
puts 'User seeded successfully!'