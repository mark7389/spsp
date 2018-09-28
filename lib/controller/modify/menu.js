
const menu = require('../../orm').menu;
const jwt = require('jsonwebtoken');

module.exports = {
    getMenu: function(req,res){
        
        let detokenize;
        let id;
        let email;
        if(req.params.token){
            try{
              detokenize = jwt.verify(req.params.token,'q^nKm@T8t>');
              id = detokenize['id'];
              email = detokenize['email'];
            }
            catch{
                res.status(401).json('unable to authenticate');
            }
            
            
            if(id && email){
                menu.getMenu(id, function(err,data){
                    if(err) res.status(404).json({msg:'no items'});
                    console.log(data);
                    res.status(200).json({items:data[0][0]['menu_items'] ? data[0][0].menu_items : null,
                                          role:data[0][0].role_id,
                                          role_name:data[0][0].role_name,
                                          user_id:data[0][0].user_id});
                })
            }
        }
        else{
            res.status(401).json('unable to authenticate');
        }
        
    }
}