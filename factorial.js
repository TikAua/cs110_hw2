
<script type="text/javascript">
const project = function(n) {
		if (n===0) {
			return 1;
		}
		return n * project(n-1);
	};
	console.log(project(5));
	</script>