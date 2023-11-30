<script>
    let destinos = [
        {id: 1, ciudad: 'Miami', pais: 'Estados Unidos', origen: 'Santiago'},
        {id: 2, ciudad: 'Buenos Aires', pais: 'Argentina', origen: 'Santiago'},
        {id: 3, ciudad: 'Lima', pais: 'Perú', origen: 'Santiago'},
        {id: 4, ciudad: 'Bogotá', pais: 'Colombia', origen: 'Santiago'},
        {id: 5, ciudad: 'Sao Paulo', pais: 'Brasil', origen: 'Santiago'},
        {id: 6, ciudad: 'Rio de Janeiro', pais: 'Brasil', origen: 'Santiago'},
        {id: 7, ciudad: 'Cancún', pais: 'México', origen: 'Santiago'},
        {id: 8, ciudad: 'Madrid', pais: 'España', origen: 'Santiago'},
        {id: 9, ciudad: 'Barcelona', pais: 'España', origen: 'Santiago'},
        {id: 10, ciudad: 'Londres', pais: 'Inglaterra', origen: 'Santiago'},
        {id: 11, ciudad: 'Paris', pais: 'Francia', origen: 'Santiago'},
        {id: 12, ciudad: 'Roma', pais: 'Italia', origen: 'Santiago'},
        {id: 13, ciudad: 'Amsterdam', pais: 'Holanda', origen: 'Santiago'},
        {id: 14, ciudad: 'Atenas', pais: 'Grecia', origen: 'Santiago'},
    ]
    let selected;


</script>
<div>
    <h1>Seleccion de destino</h1>
    <form>
        <select> {#if !selected}
            <option value="">Seleccione un destino</option>
            {/if}
            {#each destinos as destino}
           </select>
    </form>


</div>