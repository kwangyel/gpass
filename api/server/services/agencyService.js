import database from '../src/models';

class agencyService{

    static async create(data){
        try{
            const item =await database.Agency.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    // retrieve item with id
    static async retrieve(id){
        try{
            const item = await database.Agency.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveAll(){
        try{
            const item = await database.Agency.findAll()
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Agency.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Agency.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default agencyService;