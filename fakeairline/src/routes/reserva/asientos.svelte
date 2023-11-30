<script>
	let filas_asientos = 28;
	let columnas_asientos = 2;
   
	// la idea es que cada columna tenga una letra y cada fila un numero
</script>

<main>
	<div>
		<h1>Seleccion de asiento</h1>
		{#each Array(filas_asientos) as _,fila}
			<div class="flex flex-row space-x-2">
				<div class="flex flex-row space-x-3 p-2">
					<button class="w-8 h-8 bg-primary-400/20 hover:bg-primary-700/40 rounded-lg"> A{fila + 1}</button>
					<button class="w-8 h-8 bg-primary-400/20 hover:bg-primary-700/40 rounded-lg"> B{fila + 1}</button>
					<button class="w-8 h-8 bg-primary-400/20 hover:bg-primary-700/40 rounded-lg"> C{fila + 1}</button>
				</div>
                <div class="p-4"></div>
				<div class="flex flex-row space-x-3 p-2">
					<button class="w-8 h-8 bg-primary-400/20 hover:bg-primary-700/40 rounded-lg">D{fila + 1}</button>
					<button class="w-8 h-8 bg-primary-400/20 hover:bg-primary-700/40 rounded-lg">E{fila + 1}</button>
					<button class="w-8 h-8 bg-primary-400/20 hover:bg-primary-700/40 rounded-lg">F{fila + 1}</button>
				</div>
			</div>
		{/each}
	</div>
</main>
