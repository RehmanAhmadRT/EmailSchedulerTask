<?php
require_once('include/SugarPHPMailer.php');

class SendEmailHelper {

    public function __construct() {
      $GLOBALS['log']->fatal("Send Email Helper Constructor Called");
    }
    public function parseTemplate($template, $field, $module){
      $GLOBALS['log']->fatal("In parseTemplate : ". $module->id . "   ". $module_name);

      //
      //$template_bean->body = $template_bean->parse_template_bean($template_bean->body,$module_bean->module_dir, $module_bean);
      $template -> $field = $template -> parse_template_bean($template->$field, $module->module_dir, $module);
      $GLOBALS['log']->fatal("parsed template is:". $template-> $field);
      return $template;
    }
    public function fetchModuleBean($module, $id){
      return BeanFactory::getBean($module,$id, array('disable_row_level_security' => true));
    }

    public function sendEmailToAll($module){

      $accountsBean = BeanFactory::getBean($module);
      $accounts = $accountsBean->get_full_list('',"accounts.send_email_flag = 1");
      if ( $accounts != null ) {
          foreach ($accounts as $account) {
            $GLOBALS['log']->fatal("The current account is:" . "  " . "  " . $account->send_email_flag);
            if($account->send_email_flag==true){
              $GLOBALS['log']->fatal("In sendEmailToAll() of SendEmailHelper: ".$account->name . " " .$account->id . " " .$account->emailtemplate_id);
              $this->sendEmail($module, $account->id, $account->emailtemplate_id);
            }
          }
      }
    }

    public function sendEmail($module,$id,$template_id) {
      $GLOBALS['log']->fatal("In sendEmail() of SendEmailHelper". $id);
      //return $module." h ".$id."  ".$template_id;
      $module_bean = $this->fetchModuleBean($module, $id);
      if(!$module_bean->id){
        //return "Module Bean with the provided id couldnt be found";
      }
      $template_bean = $this->fetchModuleBean('EmailTemplates', $template_id);
      if(!$template_bean->id){
        //return "Template Bean with the provided id couldnt be found";
      }

      $template_bean = $this->parseTemplate($template_bean, 'body', $module_bean);
      // $GLOBALS['log']->fatal("parsed bean is:". $template_bean->body);
      //
      //return $module_bean->email1." ".$module_bean->email2. " ".$module_bean->body . " ". $module_bean->id." ".$template_bean->id ;
      $emailObj = new Email();
      $defaults = $emailObj->getSystemDefaultEmail();
      $mail = new SugarPHPMailer();
      $mail->setMailerForSystem();
      $mail->From = $defaults['email'];
      $mail->FromName = $defaults['name'];
      $mail->Subject = $template_bean->subject;
      $mail->Body = $template_bean->body;
      $mail->prepForOutbound();
      $mail->AddAddress($module_bean->email1);
      if(@$mail->Send())
        return "Email Sent Successfully!";
      else
        return "An error occured while sending the email";
  }


}
