const classes = require('../../orm').class;
const jwt = require('jsonwebtoken');
module.exports = {
    getServicesClasses: function(req,res){
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
                classes.getServicesClasses(id,function(err,data){
                    console.log(err);
                    if(err) res.status(404).json('no class found');
                    let Services = [];  
                    if(data){
                        console.log(data);
                        let index = 0;
                        let classIndex = 0;
                        data[0].map((element,i)=>{
                                
                                
                                if(i === 0){
                                    Services.push({name:element['service'],
                                                    classes:[]});
                                    Services[i].classes.push({name:element['class_name'],
                                                                id:element['class_id'],
                                                                description:element['class_description'],servants:[]});
                                    Services[i].classes[i].servants.push({first_name:element['first_name'],last_name:element['last_name'],
                                                                          email:element['email'],id:element['user_id']})
                                }
                                else if(Services[index].name.toLowerCase() === element['service'].toLowerCase()){
                                    if(Services[index].classes[classIndex].name.toLowerCase() === element['class_name'].toLowerCase()){
                                        Services[index].classes[classIndex].servants.push({first_name:element['first_name'],last_name:element['last_name'],
                                                                          email:element['email'],id:element['user_id']})
                                    }else{
                                        
                                        Services[index].classes.push({name:element['class_name'],
                                                                id:element['class_id'],
                                                                description:element['class_description'],servants:[]});
                                        classIndex++;
                                        Services[index].classes[classIndex].servants.push({first_name:element['first_name'],last_name:element['last_name'],
                                                                          email:element['email'],id:element['user_id']})
                                        
                                    }
                                  
                                }
                                else{
                                    Services.push({name:element['service'],
                                                        classes:[]});
                                    index++;
                                    classIndex = 0;
                                    Services[index].classes.push({name:element['class_name'],
                                                                id:element['class_id'],
                                                                description:element['class_description'],servants:[]});
                                    Services[index].classes[classIndex].servants.push({first_name:element['first_name'],last_name:element['last_name'],
                                                               email:element['email'] })
                                }
                        })
                        res.status(200).json(Services);
                    }
                   
                    
                })
            }
     }
    },
    getClassesServices: function(req,res){
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
                    if(data){
                        let index = 0;
                        data[0].map((element,i)=>{
                                
                                
                                if(i === 0){
                                    Services.push({name:element['service'],
                                                        classes:[]});
                                    Services[i].classes.push({class:element['class_name'],id:element['id'],
                                    description:element['class_description']});
                                    
                                }
                                else if(Services[index].name.toLowerCase() === element['service'].toLowerCase()){
                                    Services[index].classes.push({class:element['class_name'],id:element['id'],
                                    description:element['class_description']});
                                }
                                else{
                                    Services.push({name:element['service'],
                                                        classes:[]});
                                    index++;
                                    Services[index].classes.push({class:element['class_name'],id:element['id'],
                                    description:element['class_description']});
                                    
                                }
                        })
                        console.log(Services);
                        res.status(200).json(Services);
                    }
                   
                    
                })
            }
     }
    },
    getClasses:function (req,res){
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
                    if(err){ res.status(404).json('no class found');}
                    else {
                        res.status(200);
                        res.json(data[0]);
                    }
                    
                });
            }
        }
    },
    getClassDates: function(req,res){
        let detokenize;
        let id;
        let email;
        let classId = req.params.class_id;
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
                  classes.getClassDates(classId,function(err,result){
                      if(err) {res.status(404);}
                      else{ 
                          res.status(200);
                          res.json({dates:result[0]});
                        }
                  })
              }
        }
        

    }
}
