<script>
	let lista_covers = [
		'https://www.i-torrestrella.com/wp-content/uploads/elementos-aeropuerto.jpg',
		'https://cooperativa.cl/noticias/site/artic/20230726/imag/foto_0000000120230726170058.jpg',
		'https://media.primicias.ec/2022/07/08123357/aeropuerto-mariscal-lamar-cuenca-1.jpeg'
	];

	function getRandomChoice() {
		const randomIndex = Math.floor(Math.random() * lista_covers.length);
		return lista_covers[randomIndex];
	}
</script>

<!-- T0D0 : Hacer logica menu para la compra de boletos-->
<!-- T0D0 : 1. Iniciar Sesion (Incluye Login, Registro y olvide contraseña) -->
<!-- T0D0 : 2. Comprar boletos (Incluye seleccion de origen y destino, fecha de viaje, numero de pasajeros, clase de vuelo, etc) -->
<!-- T0D0 : 3. Pago (Incluye seleccion de metodo de pago, tarjeta de credito, debito, paypal, etc) -->
<!-- T0D0 : 4. Ver Reservas  -->
<main>
<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">Bienvenidx a Aerolinea Falsa</h1>
	<div>
		<img
			src={getRandomChoice()}
			alt="aeropuerto"
			class="w-full h-64 object-cover rounded-lg shadow-lg"
		/>
	</div>
	<p>Puedes comprar tu vuelo falso para un viaje falso simple y facil.</p>
	<section>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="btn variant-filled-primary" href="reserva">Reservar Vuelo</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>
</main>
