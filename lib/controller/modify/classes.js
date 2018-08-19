const classes = require('../../orm').class;
const jwt = require('jsonwebtoken');
module.exports = {
    getClasses: function(req,res){
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
                classes.getClasses(id,function(err,data){
                    if(err) res.status(404).json('no class found');
                    let Services = [];
                    console.log(data[0]);
                    if(data){
                        let index = 0;
                        data[0].map((element,i)=>{
                                
                                
                                if(i === 0){
                                    Services.push({name:element['service'],
                                                        classes:[]});
                                    Services[i].classes.push({class:element['class_name'],id:element['id']});
                                    
                                }
                                else if(Services[index].name === element['service']){
                                    Services[index].classes.push({class:element['class_name'],id:element['id']});
                                }
                                else{
                                    Services.push({name:element['service'],
                                                        classes:[]});
                                    index++;
                                    Services[index].classes.push({class:element['class_name'],id:element['id']});
                                    
                                }
                        })
                        res.status(200).json(Services);
                    }
                   
                    
                })
            }
     }
    }
}
