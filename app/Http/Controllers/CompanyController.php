<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User; 
use App\Company;

class CompanyController extends Controller
{
    public function index() {

        $companies = Company::orderBy('id')
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
            'address_zip_code' => $request->address_zip_code,
            'address_city' => $request->address_city,
            'address_country' => $request->address_country,
            'ICO' => $request->ICO,
            'DICO' => $request->DICO,
            'contact_person' => $request->contact_person,
            'contact_email' => $request->contact_email,
            'contact_phone' => $request->contact_phone
            ])->save();
            
        

        return [
            'status' => 'success',
            'message' => 'The data was successfully saved on the server.'
     ];
    }

    public function findCompany(Request $request) {
        
        $company = false;

        $company = Company::where($request[0], '=', $request[1])
                            ->first();

        if($company)
        {

            return $company;

        }
        else{
            
            return [
                'status' => 'fail',
                'message' => 'There is no registered company in our database with such a VAT number.'
            ];

        }


    }
}
