<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{

    protected $fillable = [
    'company_name', 
    'address_street',
    'address_zip_code',
    'address_city',
    'address_country',
    'ICO',
    'DICO',
    'contact_person',
    'contact_email',
    'contact_phone',
    'web'
];

    public function users() {
        return $this->belongsToMany('App\User');
    }
}
