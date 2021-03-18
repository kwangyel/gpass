import database from '../src/models';

class movementSerivce{

    static async create(data){
        try{
            const item =await database.Movement.create(data)
            return item 
        }catch(error){
            throw error
        }
    }

    // retrieve item with id
    static async retrieve(id){
        try{
            const item = await database.Movement.findOne({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async retrieveToday(){
        try{
            const Op = Sequelize.Op;
            const TODAY_START = new Date().setHours(0, 0, 0, 0);
            const NOW = new Date();

            const item = await database.Movement.findAll({
                where: {
                    created: { 
                      [Op.gt]: TODAY_START,
                      [Op.lt]: NOW
                    }
                }
            })
            return item
        }catch(error){
            throw error
        }
    }

    static async update(id,data){
        try{
            const item = await database.Movement.update(data,{
                where:{id:Number(id)}
            })
            return item 
        }catch(error){
            throw error
        }
    }

    static async delete(id){
        try{
            const item =await database.Movement.destroy({
                where:{id:Number(id)}
            })
            return item
        }catch(error){
            throw error
        }
    }

}

export default movementSerivce;