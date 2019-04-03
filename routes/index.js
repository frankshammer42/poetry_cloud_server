/*
 * Connect all of your endpoints together here.
 */
let Character = require('../models/character.js');
module.exports = function (app, router) {
    router.route('/characters')
        .post(function (req, res) {
            let character = new Character();
            character.id = req.body.id;
            character.name = req.body.name;
            character.inks = req.body.inks;
            console.log(character.inks);
            character.save(function (err) {
                if (err){
                    if (err.code == 11000){
                        res.status(400).json({message: 'Not Able to Save the Character', data:err.op});
                    }
                }
                else{
                    res.status(201).json({message: 'Character Created', data:{name: character.name}});
                }
            })
        });
	//id routes for faster debugging
    router.route('/characters/id/:id')
            .get(function (req, res) {
                let character_id = req.params.id;
                console.log(character_id);
                let character_data = Character.findOne({"id": character_id}, function (err) {
                    if (err){
                        res.status(404).send("Can't find the data");
                    }
                });
                character_data.exec(function (err, character) {
                    if (err){
                        res.status(404).json({message:"can't find the character", data:""});
                        return;
                    }
                    if (character == null){
                        res.status(404).json({message:"can't find the character", data:""});
                        return;
                    }
                    res.json({message:"Got character data", data:character})
                })
            });
	//name routes for generating poetry
    router.route('/characters/name/:name')
            .get(function (req, res) {
                let character_name = req.params.name;
                console.log(character_name);
                let character_data = Character.findOne({"name": character_name}, function (err) {
                    if (err){
                        res.status(404).send("Can't find the data");
                    }
                });
                character_data.exec(function (err, character) {
                    if (err){
                        res.status(404).json({message:"can't find the character", data:""});
                        return;
                    }
                    if (character == null){
                        res.status(404).json({message:"can't find the character", data:""});
                        return;
                    }
                    res.json({message:"Got character data", data:character})
                })
            });



    app.use('/api', require('./home.js')(router));
};
