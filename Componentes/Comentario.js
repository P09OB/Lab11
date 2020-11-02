class Comentario{

    constructor(comentario){
        this.comentario = comentario;
    }


    render =()=>{

        let component = document.createElement('div');
        let coment = document.createElement('div');

        //console.log(this.comentario.Postcomentario);
        coment.innerHTML = (

            this.comentario.Postcomentario
        );

        component.appendChild(coment);
 



        return component;
    }
}