<script>
	let fecha = new Date();
	export const fecha_formato =
		fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();
</script>

<main>
	<h1>Seleccion Fecha</h1>
	<form>
		<input type="date" bind:value={fecha} />
	</form>
</main>
