<?php
require_once('custom/include/helpers/SendEmailHelper.php');

    array_push($job_strings, 'custom_email');
    function custom_email()
    {
      $emailHelper = new SendEmailHelper();
      $emailHelper->sendEmail('Accounts','c7830d31-6423-a345-1f4b-59a808cdd50e','eaaa0a29-77d8-1604-1671-59c287b1cffa');
      $GLOBALS['log']->fatal("In Custom Email Scheduler");

      //'module_name': 'Accounts', record_id: 'c7830d31-6423-a345-1f4b-59a808cdd50e', template_id: 'eaaa0a29-77d8-1604-1671-59c287b1cffa'




      //return true for completed
      return true;
    }
