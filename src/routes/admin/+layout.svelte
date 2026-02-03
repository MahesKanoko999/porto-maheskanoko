<script lang="ts">
	let { children } = $props();

	// Admin password - change this to your desired password
	const ADMIN_PASSWORD = 'mahes2026';

	let isAuthenticated = $state(false);
	let passwordInput = $state('');
	let error = $state('');
	let isLoading = $state(true);

	// Check localStorage on mount
	$effect(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('admin_auth');
			if (stored === 'true') {
				isAuthenticated = true;
			}
			isLoading = false;
		}
	});

	function handleLogin() {
		if (passwordInput === ADMIN_PASSWORD) {
			isAuthenticated = true;
			localStorage.setItem('admin_auth', 'true');
			error = '';
		} else {
			error = 'Password salah!';
		}
	}

	function handleLogout() {
		isAuthenticated = false;
		localStorage.removeItem('admin_auth');
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			handleLogin();
		}
	}

	const navItems = [
		{ href: '/admin', label: 'Profile' },
		{ href: '/admin/experience', label: 'Experience' },
		{ href: '/admin/projects', label: 'Projects' }
	];
</script>

{#if isLoading}
	<div class="loading-wrapper">
		<div class="spinner"></div>
	</div>
{:else if !isAuthenticated}
	<div class="login-wrapper">
		<div class="login-card">
			<div class="login-header">
				<h1>Portfolio <span>CMS</span></h1>
				<p>Masukkan password untuk mengakses admin panel</p>
			</div>

			<div class="login-form">
				<input 
					type="password" 
					placeholder="Password" 
					bind:value={passwordInput}
					onkeydown={handleKeydown}
					class:error={error !== ''}
				/>
				{#if error}
					<p class="error-text">{error}</p>
				{/if}
				<button onclick={handleLogin}>Login</button>
			</div>

			<a href="/" class="back-home">← Kembali ke Portfolio</a>
		</div>
	</div>
{:else}
	<div class="admin-wrapper">
		<!-- Simple Top Navigation -->
		<header class="admin-header">
			<a href="/" class="admin-logo">
				Portfolio <span>CMS</span>
			</a>
			
			<nav class="admin-nav">
				{#each navItems as item}
					<a href={item.href}>{item.label}</a>
				{/each}
			</nav>

			<div class="header-actions">
				<button class="logout-btn" onclick={handleLogout}>Logout</button>
				<a href="/" class="back-link">← Back to Site</a>
			</div>
		</header>

		<!-- Main Content -->
		<main class="admin-content">
			{@render children()}
		</main>
	</div>
{/if}

<style>
	.loading-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: var(--color-bg);
	}

	.spinner {
		width: 40px;
		height: 40px;
		border: 3px solid var(--color-bg-lighter);
		border-top-color: var(--color-primary);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.login-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: var(--color-bg);
		padding: 24px;
	}

	.login-card {
		background-color: var(--color-bg-light);
		border: 1px solid var(--color-bg-lighter);
		border-radius: 12px;
		padding: 48px;
		max-width: 400px;
		width: 100%;
		text-align: center;
	}

	.login-header h1 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text-lighter);
		margin-bottom: 8px;
	}

	.login-header h1 span {
		color: var(--color-primary);
		font-weight: 400;
	}

	.login-header p {
		font-size: 0.875rem;
		color: var(--color-text);
		margin-bottom: 32px;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.login-form input {
		padding: 14px 16px;
		border-radius: 8px;
		border: 1px solid var(--color-bg-lighter);
		background-color: var(--color-bg);
		color: var(--color-text-lighter);
		font-size: 1rem;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.login-form input:focus {
		border-color: var(--color-primary);
	}

	.login-form input.error {
		border-color: #ff6b6b;
	}

	.error-text {
		font-size: 0.875rem;
		color: #ff6b6b;
		margin: -8px 0 0 0;
	}

	.login-form button {
		padding: 14px 24px;
		border-radius: 8px;
		border: none;
		background-color: var(--color-primary);
		color: var(--color-bg);
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.login-form button:hover {
		background-color: rgba(100, 255, 218, 0.9);
		transform: translateY(-2px);
	}

	.back-home {
		display: inline-block;
		margin-top: 32px;
		font-size: 0.875rem;
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.back-home:hover {
		color: var(--color-primary);
	}

	.admin-wrapper {
		min-height: 100vh;
		background-color: var(--color-bg);
	}

	.admin-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 48px;
		border-bottom: 1px solid var(--color-bg-lighter);
		max-width: 1200px;
		margin: 0 auto;
	}

	.admin-logo {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-lighter);
		text-decoration: none;
	}

	.admin-logo span {
		color: var(--color-primary);
		font-weight: 400;
		margin-left: 4px;
	}

	.admin-nav {
		display: flex;
		gap: 32px;
	}

	.admin-nav a {
		font-size: 0.875rem;
		color: var(--color-text);
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		transition: color 0.2s ease;
	}

	.admin-nav a:hover {
		color: var(--color-primary);
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.logout-btn {
		font-size: 0.75rem;
		padding: 8px 16px;
		border-radius: 4px;
		border: 1px solid var(--color-primary);
		background: transparent;
		color: var(--color-primary);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.logout-btn:hover {
		background: rgba(100, 255, 218, 0.1);
	}

	.back-link {
		font-size: 0.875rem;
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: var(--color-primary);
	}

	.admin-content {
		max-width: 800px;
		margin: 0 auto;
		padding: 48px 24px;
	}

	@media (max-width: 768px) {
		.admin-header {
			flex-direction: column;
			gap: 16px;
			padding: 20px 24px;
		}

		.admin-nav {
			gap: 20px;
		}

		.header-actions {
			flex-direction: column-reverse;
			gap: 12px;
		}

		.login-card {
			padding: 32px 24px;
		}
	}
</style>
