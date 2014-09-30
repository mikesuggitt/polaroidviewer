<?php




//$URL = "http://www.bbc.co.uk/mundo/index.app.json";
$URL = "http://cdn.deepcobalt.com/api/wsfeeds/1/type:image/limit:100";
$proxy = 'www-cache.reith.bbc.co.uk:80';


try {
    $c = curl_init();
    curl_setopt($c, CURLOPT_URL, $URL);
    curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($c, CURLOPT_PROXY, $proxy);
    $contents = curl_exec($c);
    curl_close($c);

    echo $contents;
}
catch(Exception $e){
    //var_dump($e);
}



?>