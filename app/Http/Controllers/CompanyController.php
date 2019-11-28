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

        $this->validate($request, [
            'company_name' => ['required', 'string', 'max:255'],
            'address_street' => ['required', 'string', 'max:255'],
            'address_zip_code' => ['required', 'string', 'max:255'],
            'address_city' => ['required', 'string', 'max:255'],
            'address_country' => ['required', 'string', 'max:255'],
            'ICO' => ['required', 'string', 'max:255', 'unique:companies'],
            'DICO' => ['required', 'string', 'max:255', 'unique:companies'],
            'primary_contact' => ['required', 'string', 'max:255'],
            'contact_email' => ['required', 'string', 'max:255'],
            'contact_phone' => ['required', 'string', 'max:255'],
            'web' => ['required', 'string', 'max:255']
                
        ]);


        $company = Company::create([
            'company_name' => $request->company_name, 
            'address_street' => $request->address_street,
            'address_zip_code' => $request->address_zip_code,
            'address_city' => $request->address_city,
            'address_country' => $request->address_country,
            'ICO' => $request->ICO,
            'DICO' => $request->DICO,
            'primary_contact' => $request->primary_contact,
            'contact_email' => $request->contact_email,
            'contact_phone' => $request->contact_phone,
            'web' => $request->web
            ]);
            

        return [
            'status' => 'success',
            'message' => 'The data was successfully saved on the server.',
            'company_id' => $company->id,
            'company_name' => $company->company_name,
            'company_identification_number' => $company->ICO
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
