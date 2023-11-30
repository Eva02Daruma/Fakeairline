<script>
	import { user } from './login_store.js';
	let username = '';
	let password = '';
	let logged = false;

	function handleLogin() {
        logged = true;
		user.set({ username, password, logged: logged });
	}
</script>

<main class="container mx-auto p-8 space-y-8">
	<!-- Formulario Login -->
	{#if logged}
		<h1 class="h1">Bienvenidx {username}</h1>
	{:else}
		<h1 class="h1">Iniciar Sesion</h1>
		<form on:submit={handleLogin} class="">
			<div class="">
				<label class="Usuario">
					<span>Usuario</span>
					<input bind:value={username} required class="input" type="text" placeholder="Usuario" />
				</label>
				<label class="Contraseña">
					<span>Contraseña</span>
					<input
						bind:value={password}
						required
						class="input"
						type="password"
						placeholder="Contraseña"
					/>
				</label>
			</div>
			<div class="pt-4">
				<button class="btn variant-filled-primary" type="submit">Iniciar Sesion</button>
			</div>
		</form>
	{/if}
</main>
