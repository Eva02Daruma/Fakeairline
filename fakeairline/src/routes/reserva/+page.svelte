<script>
	import Asientos from './asientos.svelte';
	import Destinos from './destinos.svelte';
	import Fecha from './fecha.svelte';
</script>

<main>
    <!-- Video Informativo -->
    <!-- https://www.youtube.com/watch?v=P_A0qQ7AuK8&ab_channel=Huntabyte -->
	<h1 class="h2 p-9 justify-center">Reserva de vuelo</h1>
	<div class="container bg-primary-400/20 border-2 md:p-9 mx-auto md:my-5 space-y-8">
		<div class="flex flex-row px-4 py-3 mx-4 space-x-20 justify-start">
            <Destinos></Destinos>
			<Fecha></Fecha>
		</div>
		<div class="flex flex-row px-4 mx-4 space-x-20 justify-start">
            <Asientos></Asientos>
        </div>
	</div>
</main>
