class Inventario{
    constructor(){
        this.inventario = new Array();
    }

    buscar(codigo){
    for(let i=0; i<this.inventario.length; i++){
        if(codigo === this.inventario[i].obtenerCodigo()){
            return this.inventario[i];
        }
    }
    return -1;
}

    conseguirPosicion(codigo){
      for(let i=0; i <this.inventario.length; i++){
          if(codigo == this.inventario[i].obtenerCodigo()){
            return i;
          }
      } 
    return null;
}

    agregar(producto){
        let posicion = this.buscar(producto.obtenerCodigo());
        let  r = confirm("¿Esta seguro de agregar este producto?");
        if(r === true){
          if(posicion === -1){
            this.inventario.push(producto);
          }else{
            return null;
          }
      } else{
        alert("Se ha cancelado el producto");
      }
    }
    
    lista(){
     let res=" ";
      for(let i=0; i<this.inventario.length;i++){
        res += `<br> ${this.inventario[i].obtenerDetalles()} </br>`;
      }
      if(res != " "){
       return res;
      }
      else{
        return null;
      }
    }

    listainverso(){
      let res=" ";
      for(let i=this.inventario.length-1; i >=0;i--){
        res += `<br> ${this.inventario[i].obtenerDetalles()} </br>`;
      }
      if(res != " "){
        return res;
       }
       else{
         return null;
       }
    }

    eliminar(codigo){
        let posicion = this.conseguirPosicion(codigo);
        let posiciond = posicion+1;
        let  r = confirm("¿Está seguro de eliminar este producto?");
        if(r === true){
        if(posicion!= null){
        while(posiciond<this.inventario.length){
          let aux = this.inventario[posicion];
          this.inventario[posicion] = this.inventario[posiciond];
          this.inventario[posiciond] = aux;
          posicion++;
          posiciond++;
        }
        return this.inventario.pop();
       } else{
        return null;
       }
      } else{
        alert("No se ha eliminado el producto");
      }
    }
}