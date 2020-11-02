class Publicacion{

    constructor(publicacion){
        this.publicacion = publicacion;
    }

    render = ()=>{
        let component = document.createElement('div'); 
        component.className='generalComponent'
        let post = document.createElement('div');
        let nombre = document.createElement('div');
        let comment = document.createElement('input');
        let buttonComment = document.createElement('button');
        buttonComment.textContent='Comentar';
        let componentComment = document.createElement('div');
        let postcomment = document.createElement('div');
        post.innerHTML = (

            this.publicacion.comentario
        );

        nombre.innerHTML = this.publicacion.nombre



        buttonComment.addEventListener('click',()=>{
            let database = firebase.database();
            let com = comment.value;

            let objetctComment = {

                Postcomentario: com,

            }

            database.ref('Comentarios/'+this.publicacion.id).push().set(objetctComment);

        });

        database.ref('Comentarios/'+this.publicacion.id).on("value",function(data){

            data.forEach(
                
                postComment=>{
    
                let valor = postComment.val();
                let comentariosPost = new Comentario(valor);
                postcomment.appendChild(comentariosPost.render());
            });
    
        });

        
        component.appendChild(nombre);
        component.appendChild(post);
        component.appendChild(componentComment);
        componentComment.appendChild(postcomment);

        componentComment.appendChild(comment);
        componentComment.appendChild(buttonComment);
        




        return component;
    }

}