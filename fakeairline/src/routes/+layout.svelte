<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Avatar, LightSwitch, localStorageStore } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
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
				<Avatar
					src="https://avatars.githubusercontent.com/u/10639145?v=4"
					alt="Avatar"
					class="w-8 h-8 sm:w-10 sm:h-10"
				/>
				<LightSwitch />
				<a class="btn btn-sm variant-ghost-surface md:mx-auto"> Login </a>
				<a class="btn btn-sm variant-ghost-surface md:mx-auto"> Reservar </a>
				<a class="btn btn-sm variant-ghost-surface md:mx-auto"> Mis Reservas </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Content -->

	<slot />
</AppShell>
