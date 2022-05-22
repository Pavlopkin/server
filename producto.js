const fs = require('fs');

class Files{
    constructor(name){
        this.name = name;
        this.products = {};
        this.arr = []
        this.id = 0;
    }
    /*Hice esta función sincrónica para facilitar la creación de los id*/
    save(title, price, thumbnail){
        this.id= this.arr.length+1;
        this.products =
        {
            id: this.id,
            title: title,
            price: price,
            thumbnail: thumbnail,
        };  
        this.arr.push(this.products);
        fs.appendFileSync(this.name, JSON.stringify(this.products, null, '\t'))
            try{
                console.log(`Producto agregado con el ID: ${this.id}`)
                console.log(`${this.arr[this.id-1].title}\n`)
            } catch (err) {
                console.log("hubo un error al crear el archivo")
                console.log(err)
            } 
    }
    getAll(){
        try{
            let data = fs.readFileSync(this.name, 'utf-8')
            return data
        }catch(err){
            console.log("Error al leer el archivo" + err)
        }
    }
    deleteById(number){
        let borrar = this.arr.find(index => index.id === number);
        if((this.arr.length+1)<number){
            console.log("no existe un producto con ese id");
        }else{
            this.arr.splice(this.arr.indexOf(borrar), 1)
            console.log(`Se ha eliminado registro guardado con el ID: ${number}`)
            console.log("Operacion exitosa")
            fs.writeFileSync(this.name, JSON.stringify(this.arr, null, '\t'))  
        }        
    }
    async deleteAll(){
        try{
            await fs.promises.unlink(this.name)
            console.log("Archivo borrado con exito")
        }catch(err){
            console.log("no se pudo borrar el archivo" + err)
        }
    }
    
}

module.exports = {Files};