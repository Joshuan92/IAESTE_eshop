<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User; 

class CompanyController extends Controller
{
    public function index () {

        $companies = User::orderBy('id')
                        ->with('company')
                        ->limit(20)
                        ->get();

        return $companies;

    }
}
