<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Avatar, LightSwitch, localStorageStore } from '@skeletonlabs/skeleton';

	// User Store
	import { user } from './login/login_store.js';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let currentUser = {}; // Inicializa con un objeto vacío
	let username = '';
	let logged = false;

	onMount(() => {
		const unsubscribe = user.subscribe((value) => {
			username = value.username;
			logged = value.logged;

		});

		// Asegúrate de cancelar la suscripción al destruir el componente
		return () => unsubscribe();
	});
</script>

<!-- App Shell -->
<!-- svelte-ignore a11y-missing-attribute -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/"> Aerolinea Falsa</a></strong>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#if username == ''}
					<a>Ningun usuario</a>
				{:else}
					<a>Bienvenidx {username}</a>
				{/if}
				<LightSwitch />
				{#if logged}
					<a>.</a>
				{:else}
					<a href="/login" class="btn btn-sm variant-ghost-surface  md:mx-auto"> Login </a>
				{/if}
				<a href="/reserva" class="btn btn-sm variant-ghost-surface md:mx-auto"> Reservar </a>
				<a class="btn btn-sm variant-ghost-surface md:mx-auto"> Mis Reservas </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Content -->

	<slot />
</AppShell>
