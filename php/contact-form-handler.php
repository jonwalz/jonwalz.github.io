<?php
include '../aws/aws-autoloader.php';

use Aws\S3\S3Client;


$result = $stsClient->getSessionToken();
$credentials = $stsClient->createCredentials($result);

$client = S3Client::factory(array('credentials' => $credentials));

$body = "Name: {$_POST['name']} \n" . 
	"Email: {$_POST['email']} \n" .
	"Comments: {$_POST['comments']} \n";

$result = $client->putObject(array(
	'Bucket' => '<your bucket name>',
	'Key'    => date('m-d-Y-h-i-s-A').'.txt',
	'Body'   => $body
));
?>