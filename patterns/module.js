var github = (function () {
  var _nickname = "relkimm";
  var getNickname = function () {
    return _nickname;
  };
  var changeNickname = function (next) {
    _nickname = next;
  };

  var _repositories = ["javascript", "mini-redux", "hooks"];
  var getRepositories = function () {
    return _repositories;
  };

  return {
    getNickname,
    changeNickname,
    getRepositories,
  };
})();

console.log("nickname:", github.getNickname());
github.changeNickname("yezzang");
console.log("nickname:", github.getNickname());
console.log("repositories:", github.getRepositories());
