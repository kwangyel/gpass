import database from '../src/models';

class agentService{

    static async create(data){
        try{
            const item =await database.Agent.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    // retrieve item with id
    static async retrieve(id){
        try{
            const item = await database.Agent.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }


    static async update(id,data){
        try{
            const item = await database.Agent.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Agent.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default agentService; 