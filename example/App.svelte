<script>
	import Fingerprint from '../src/Fingerprint.svelte';
	let data = [
		{"a": "a", "b": 1},
		{"a": 1, "b": "v"}
	];
	data.columns = ["a", "b"]
</script>
<Fingerprint {data} />
