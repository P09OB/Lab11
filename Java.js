const publicar = document.getElementById('publicar');
const name = document.getElementById('name');
const comentario = document.getElementById('comentario');
const containerPost = document.getElementById('containerPost');

const database = firebase.database();


mandar = () =>{

   let obtener = database.ref('publicacion').push()
   let publicacion = comentario.value;
   let nombre = name.value;

   let objectpublicacion = {

    id: obtener.key,
    nombre: nombre,
    comentario: publicacion,
    

   }

   obtener.set(objectpublicacion);

}

database.ref('publicacion').on('value',function(data){

    containerPost.innerHTML = '';

    data.forEach(

        publicaciones =>{

            let post = publicaciones.val();
            console.log(post.comentario);
            let filacomentario = new Publicacion(post);
            containerPost.appendChild(filacomentario.render());

        }


    );
});



publicar.addEventListener('click',mandar);