<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';
?>
<html>
<!-- <div id="chart"></div> -->
<script>

//make c3 generate a report
var array = "<?php get_all_affiliations_from_groups(); ?>";//PHP's associtiave array becomes an object literal in JS

console.log(array);
// var chart = c3.generate({
//     data: {
//         // iris data from R
//         columns: [
//             ['data1', 30],
//             ['data2', 120],
//         ],
//         type : 'pie',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     }
// });
</script>
</html>
