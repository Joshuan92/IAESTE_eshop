<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User; 
use App\Company;

class CompanyController extends Controller
{
    public function index () {

        $companies = Company::orderBy('id')
                        ->with('users')
                        ->limit(20)
                        ->get();

        return $companies;

    }
}
