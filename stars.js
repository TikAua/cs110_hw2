
<script>
	const stars = function(a) {
  if (a === 0) {
    return "";}
  return "*" + stars(a-1);
};
const space = function(b) {
  if (b === 0) {
    return "";}
  return " " + space(b-1);
};
  const connection = function (numb,numa,n) {
    if (n===0) {
      return "";}
    console.log(space(numb)+ stars(numa)) ; 
    connection(numb-1,numa+2,n-1);
  };
  const triangleStars = function(n) {
    connection(n-1,1,n)}
triangleStars(5);
</script>







