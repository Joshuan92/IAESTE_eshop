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

    public function store (Request $request) {

        // dd($request);


        // $company = new Company;
        // $company->company_name = $request->input()


        $company = Company::create([
            'company_name' => $request->company_name, 
            'address_street' => $request->address_street, 
            'contact_email' => $request->contact_email 
            ])->save();
        

        return [
            'status' => 'success',
            'message' => 'The data was successfully saved on the server.'
     ];
    }
}
