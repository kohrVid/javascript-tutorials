var mongoose = require("mongoose");
var productSchema = require("./user");

var User = mongoose.model("User", productSchema);

var u = new User({
  profile: { username: "vkarpov15" }
});

modifyUserProfile(u, {
  picture: "https://pixabay.com/static/uploads/photo/2014/03/29/09/17/cat-300572_960_720.jpg"
});

function modifyUserProfile (user, profile, callback) {
  user.profile = profile;
  user.save(function (error, user) {
    //handle result
  });
};
