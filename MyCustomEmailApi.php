<?php
//if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');
require_once('custom/include/helpers/SendEmailHelper.php');
class MyCustomEmailApi extends SugarApi
{
   public function registerApiRest()
   {
     return [
       'SendEmail' => [
                'reqType' => 'POST',
                'path' => array('SendEmail'),
                'pathVars' => array(''),
                'method' => 'SendEmail',
                'shortHelp' => 'This method will merge selected pages into one PDF in sequence',
                'longHelp' => '',
            ],

     ];
   }

   /**
    * Method to be used for my MyCustomEmail/SendEmail endpoint
    */
   public function SendEmail($api, $args)
   {
      $GLOBALS['log']->fatal("Here is the log");
      $GLOBALS['log']->fatal(print_r($args,1));
      $myEmailHelper = new SendEmailHelper();
      //return $myEmailHelper -> sendEmail($args['module_name'],$args['record_id'],$args['template_id']);
      return $myEmailHelper -> sendEmailToAll($args['module_name']);
    }
}
//localhost/SugarPro-Full-7.6.2.1/rest/v10/MyCustomEmail/SendEmail/
?>
