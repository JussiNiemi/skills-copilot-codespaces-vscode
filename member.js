function skillMember() {
    this.name = 'skillMember';
    this.type = 'member';
    this.path = 'skill';
    this.cache = 0;
    this.submenu = [];
    this.list = function(req, res) {
        var skill = new Skill();
        skill.list(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    };
    this.add = function(req, res) {
        var skill = new Skill();
        skill.add(req.body, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    };
    this.update = function(req, res) {
        var skill = new Skill();
        skill.update(req.body, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    };
    this.delete = function(req, res) {
        var skill = new Skill();
        skill.delete(req.body, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    };
}
