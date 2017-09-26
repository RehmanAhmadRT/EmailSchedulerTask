<?php
$dictionary['Account']['fields']['send_email_flag']=array(
  'massupdate' => false,
  'name' => 'send_email_flag',
  'vname' => 'LBL_SEND_EMAIL_FLAG',
  'type' => 'bool',
  'comment' => 'Favorite for the user',
);

$dictionary['Account']['fields']['emailtemplate_name'] = array(
    'required'  => false,
    'source'    => 'non-db',
    'name'      => 'emailtemplate_name',
    'vname'     => 'LBL_SUBSCRIBER_NAME',
    'type'      => 'relate',
    'rname'     => 'name',
    'id_name'   => 'emailtemplate_id',
    'join_name' => 'emailtemplate',
    'link'      => 'emailtemplate',
    'table'     => 'email_templates',
    'isnull'    => 'true',
    'module'    => 'EmailTemplates',
    );
$dictionary['Account']['fields']['emailtemplate_id'] = array(
    'name'              => 'emailtemplate_id',
    'rname'             => 'id',
    'vname'             => 'LBL_SUBSCRIBER_ID',
    'type'              => 'id',
    'table'             => 'email_templates',
    'isnull'            => 'true',
    'module'            => 'EmailTemplates',
    'dbType'            => 'id',
    'reportable'        => false,
    'massupdate'        => false,
    'duplicate_merge'   => 'disabled',
    );
$dictionary['Account']['fields']['emailtemplate'] = array(
  	'name'          => 'emailtemplate',
    'type'          => 'link',
    'relationship'  => 'accounts_emailtemplate',
    'module'        => 'EmailTemplates',
    'bean_name'     => 'EmailTemplate',
    'source'        => 'non-db',
    'vname'         => 'LBL_SUBSCRIBERS',
    );
$dictionary['Account']['relationships']['accounts_emailtemplate'] = array(
    'rhs_module'		=> 'Accounts',
    'rhs_table'			=> 'accounts',
    'rhs_key'			=> 'emailtemplate_id',
    'lhs_module'		=> 'EmailTemplates',
    'lhs_table'			=> 'email_templates',
    'lhs_key'			=> 'id',
    'relationship_type'	=> 'one-to-many',
    );
