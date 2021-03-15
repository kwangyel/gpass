import database from '../src/models';

class requestService{

    static async create(data){
        try{
            const item =await database.Request.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    // retrieve item with id
    static async retrieve(id){
        try{
            const item = await database.Request.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Request.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Request.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }
}

export default requestService;